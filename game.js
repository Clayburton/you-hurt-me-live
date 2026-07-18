/* ============================================================
   you hurt me — the hidden game.
   Your cursor is a weapon. Clicking the lyrics hurts them.
   Kills give XP → LEVEL UP → choose a deadlier weapon → the
   words start running → at max power you scar the video itself.
   All feedback is visual. The song is never touched.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- the arsenal, ranked by danger ---------- */
  const WEAPONS = {
    fist:     { e:"👊", name:"fist",     dmg:1,  cd:160, tier:1 },
    glove:    { e:"🥊", name:"glove",    dmg:1,  cd:90,  tier:2 },                    // fast hands
    hammer:   { e:"🔨", name:"hammer",   dmg:2,  cd:240, tier:2, splash:0.12, splashDmg:0.6 },
    axe:      { e:"🪓", name:"axe",      dmg:2,  cd:200, tier:3, crit:0.35, critX:3 },
    pickaxe:  { e:"⛏️", name:"pickaxe",  dmg:3,  cd:250, tier:3, reach:0.09 },        // bites what it aims at
    knife:    { e:"🔪", name:"knife",    dmg:2,  cd:100, tier:4 },
    sword:    { e:"🗡️", name:"sword",    dmg:5,  cd:320, tier:4 },
    saw:      { e:"🪚", name:"saw",      dmg:3,  cd:90,  tier:5 },                    // grinds fast
    dynamite: { e:"🧨", name:"dynamite", dmg:7,  cd:340, tier:5, splash:0.16, splashDmg:1 },
    slugger:  { img:"assets/ding/slugger.png", name:"bat", dmg:12, cd:300, tier:6, scar:1 },
    bomb:     { e:"💣", name:"bomb",     dmg:10, cd:420, tier:6, splash:0.22, splashDmg:1, scar:2 },
  };
  const UPGRADES = {           // level → the two boxes
    2: ["glove", "hammer"],
    3: ["axe", "pickaxe"],
    4: ["knife", "sword"],
    5: ["saw", "dynamite"],
    6: ["slugger", "bomb"],
  };
  const XP_NEED = [0, 18, 54, 120, 220, 380];   // cumulative XP to reach level 2..6
  const PAR = [[40, 2], [80, 3], [120, 4], [160, 5]];  // rubber-band: behind par → 1.5x XP

  /* ---------- bosses: the song's loudest words fight hardest ---------- */
  const BOSS = [   // [cue start time, hp]
    [21.822, 16],   // HEY!
    [29.363, 18],   // the saaay wall
    [44.878, 24],   // YOU NEVER ASKED ME
    [72.639, 30],   // CHOICE.
    [95.696, 30],   // the giant strobing hey
    [165.301, 33],  // you hurt me (the hold)
    [204.537, 45],  // WHY DON'T YOU SAY IT?
  ];
  // gentle lyric flinch — ONLY the later walk-away lines, and barely (nothing is scared early)
  const FLINCH = [40.641, 92.459];

  const st = {
    on: false, weapon: WEAPONS.bat, level: 1, xp: 0, hits: 0, kills: 0,
    lastStrike: 0, ptr: { x: -1e4, y: -1e4 },
    words: new Map(),      // cue idx -> {hp, maxHp, dead, wounds:[{fx,fy}], evade:{x,y}}
    choosing: null,
  };

  let bridge, stage, cueLayer, weaponEl, scarCtx, scarCv, lvlEl;

  /* ---------- word state ---------- */
  function wordState(idx, cue, el) {
    let w = st.words.get(idx);
    if (!w) {
      let hp;
      const boss = BOSS.find((b) => Math.abs(b[0] - cue.s) < 0.02);
      if (boss) hp = boss[1];
      else {
        const life = cue.e - cue.s;
        hp = life < 0.3 ? 2 : life < 1 ? 5 : life < 2 ? 9 : 12;
        if (cue.fit && cue.fit >= 0.6) hp += 6;
        if (cue.text === "(why?)") hp = 1;               // the storm: one swat each
      }
      w = { hp: hp, maxHp: hp, dead: false, wounds: 0, evade: { x: 0, y: 0 } };
      st.words.set(idx, w);
    }
    return w;
  }

  /* ---------- per-letter wounds ---------- */
  function spanify(el) {
    if (el.dataset.spanned || el.querySelector("img") || el.querySelector(".ch")) return;
    const t = el.textContent;
    el.textContent = "";
    for (const ch of t) {
      if (ch === "\n") { el.appendChild(document.createTextNode("\n")); continue; }
      const s = document.createElement("span");
      s.className = "gch";
      s.textContent = ch;
      el.appendChild(s);
    }
    el.dataset.spanned = "1";
  }
  function woundAt(el, x, y, deep) {
    // find the letter under the strike and hurt IT
    spanify(el);
    let best = null, bd = 1e9;
    el.querySelectorAll(".gch").forEach(function (s) {
      const r = s.getBoundingClientRect();
      const d = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2));
      if (d < bd) { bd = d; best = s; }
    });
    if (!best) { el.classList.add("g-jolt"); setTimeout(() => el.classList.remove("g-jolt"), 160); return; }
    const n = (+best.dataset.d || 0) + 1;
    best.dataset.d = n;
    const a = (Math.random() - 0.5) * (8 + 6 * n);
    const dx = (Math.random() - 0.5) * 2 * n, dy = (Math.random() - 0.5) * 2 * n;
    best.style.transform = "translate(" + dx + "px," + dy + "px) rotate(" + a + "deg)";
    // every hit takes a bite out of the glyph — even the first fist
    const bx = 15 + Math.random() * 70, by = 10 + Math.random() * 55, r = 12 + 12 * Math.min(n, 4) + (deep ? 12 : 0);
    best.style.clipPath =
      "polygon(0 0,100% 0,100% 100%,0 100%,0 " + by + "%," + bx + "% " + by + "%," +
      (bx + r * 0.6) + "% " + (by + r) + "%," + Math.max(0, bx - r * 0.4) + "% " + (by + r * 0.5) + "%,0 " + (by + r * 0.8) + "%)";
    // and the letter burns redder with every hit
    best.style.color = ["#000", "#7a0000", "#b40000", "#e00000", "#ff1a00"][Math.min(n, 4)];
    if (n >= 4) best.style.opacity = Math.max(0.3, 1 - 0.14 * n);
  }

  /* ---------- kill ---------- */
  function kill(idx, cue, el, w) {
    w.dead = true;
    st.kills++;
    if (el.dataset.spanned) {
      el.querySelectorAll(".gch").forEach(function (s) {
        s.style.transition = "transform .38s ease-in, opacity .34s ease-in";
        s.style.transform = "translate(" + ((Math.random() - 0.5) * 60) + "px," + (20 + Math.random() * 50) + "px) rotate(" + ((Math.random() - 0.5) * 120) + "deg)";
        s.style.opacity = 0;
      });
    } else {
      el.classList.add("g-dead");
    }
    setTimeout(function () { el.style.visibility = "hidden"; }, 400);
    if (st.weapon.tier >= 3) shake(st.weapon.tier);
    gainXp(Math.ceil(w.maxHp / 2) + (cue.text === "(why?)" ? 5 : 0));
  }

  /* ---------- XP / levels ---------- */
  function gainXp(n) {
    const t = bridge.time();
    const behind = PAR.some(function (p) { return t > p[0] && st.level < p[1]; });
    st.xp += behind ? n * 1.5 : n;
    if (st.level < 6 && st.xp >= XP_NEED[st.level] && !st.choosing) offerUpgrade(st.level + 1);
  }
  function offerUpgrade(next) {
    st.choosing = next;
    const pair = UPGRADES[next];
    lvlEl.innerHTML =
      '<div class="g-lvltext">LEVEL UP</div><div class="g-boxes">' +
      pair.map(function (k) {
        const w = WEAPONS[k];
        return '<button class="g-box" data-w="' + k + '"><span class="g-boxe">' + weaponFace(w) + '</span><span class="g-boxn">' + w.name + "</span></button>";
      }).join("") + "</div>";
    lvlEl.classList.add("is-on");
    lvlEl.querySelectorAll(".g-box").forEach(function (b) {
      b.addEventListener("pointerdown", function (e) {
        e.stopPropagation();
        equip(b.dataset.w, next);
      });
    });
    clearTimeout(lvlEl._t);
    lvlEl._t = setTimeout(function () { if (st.choosing === next) equip(pair[0], next); }, 8000);
  }
  function weaponFace(w) {
    return w.img ? '<img class="wimg" src="' + w.img + '" alt="">' : w.e;
  }
  function equip(key, level) {
    st.weapon = WEAPONS[key];
    st.level = level;
    st.choosing = null;
    lvlEl.classList.remove("is-on");
    weaponEl.innerHTML = weaponFace(st.weapon);
    weaponEl.style.fontSize = (34 + 3 * st.weapon.tier) + "px";
    if (st.level >= 6) {                    // the top of the ladder
      clearTimeout(lvlEl._t);
      setTimeout(function () {
        lvlEl.innerHTML = '<div class="g-lvltext">MAX LEVEL</div>';
        lvlEl.classList.add("is-on");
        lvlEl._t = setTimeout(function () { lvlEl.classList.remove("is-on"); }, 2400);
      }, 220);
    } else if (st.xp >= XP_NEED[st.level]) offerUpgrade(st.level + 1);
  }

  /* ---------- background scars (permanent — max tier only) ---------- */
  function scar(x, y, big) {
    const c = scarCtx, R = big ? 90 : 55;
    c.save();
    c.translate(x, y);
    for (let i = 0; i < (big ? 26 : 14); i++) {     // soot
      const a = Math.random() * 6.283, d = Math.random() * R;
      c.fillStyle = "rgba(0,0,0," + (0.04 + Math.random() * 0.12) + ")";
      const s = 2 + Math.random() * (big ? 14 : 8);
      c.fillRect(Math.cos(a) * d - s / 2, Math.sin(a) * d - s / 2, s, s);
    }
    for (let i = 0; i < (big ? 7 : 4); i++) {       // cracks
      let a = Math.random() * 6.283, px = 0, py = 0;
      c.strokeStyle = "rgba(0,0,0," + (0.5 + Math.random() * 0.4) + ")";
      c.lineWidth = Math.random() < 0.3 ? 2 : 1;
      c.beginPath(); c.moveTo(0, 0);
      const segs = 4 + (Math.random() * 4 | 0);
      for (let sgi = 0; sgi < segs; sgi++) {
        a += (Math.random() - 0.5) * 1.1;
        px += Math.cos(a) * (8 + Math.random() * (big ? 34 : 18));
        py += Math.sin(a) * (8 + Math.random() * (big ? 34 : 18));
        c.lineTo(px, py);
      }
      c.stroke();
    }
    c.restore();
  }
  function shake(tier) {
    const k = tier >= 6 ? 7 : tier >= 5 ? 4 : 2;
    stage.style.transition = "none";
    stage.style.transform = "translate(" + ((Math.random() - 0.5) * 2 * k) + "px," + ((Math.random() - 0.5) * 2 * k) + "px)";
    setTimeout(function () { stage.style.transform = ""; }, 90);
  }

  /* ---------- the strike ---------- */
  function targetsAt(x, y, radiusPx) {
    const out = [];
    bridge.mounted().forEach(function (el, idx) {
      const cue = bridge.cues()[idx];
      const w = st.words.get(idx);
      if (w && w.dead) return;
      const r = el.getBoundingClientRect();
      const pad = 8;
      const inBox = x > r.left - pad && x < r.right + pad && y > r.top - pad && y < r.bottom + pad;
      const d = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2));
      if (inBox || d < radiusPx) out.push({ idx: idx, cue: cue, el: el, d: inBox ? 0 : d });
    });
    return out.sort(function (a, b) { return a.d - b.d; });
  }
  function strike(x, y) {
    const now = performance.now();
    if (now - st.lastStrike < st.weapon.cd) return;
    st.lastStrike = now;
    weaponEl.classList.remove("is-swing"); void weaponEl.offsetWidth; weaponEl.classList.add("is-swing");

    const W = stage.clientWidth;
    const wp = st.weapon;
    const reach = (wp.reach || 0.045) * W;
    const hits = targetsAt(x, y, reach);
    if (!hits.length) { if (wp.scar) { scar(x, y, wp.scar > 1); shake(6); } return; }

    // primary target
    const h = hits[0];
    let dmg = wp.dmg;
    if (wp.crit && Math.random() < wp.crit) dmg *= wp.critX;
    applyDamage(h, dmg, x, y);

    // splash
    if (wp.splash) {
      const sr = wp.splash * W;
      targetsAt(x, y, sr).slice(1, 5).forEach(function (h2) {
        applyDamage(h2, Math.max(1, Math.round(wp.dmg * wp.splashDmg)), x, y);
      });
    }
    if (wp.scar) { scar(x, y, wp.scar > 1); shake(6); }
  }
  function applyDamage(h, dmg, x, y) {
    const w = wordState(h.idx, h.cue, h.el);
    if (w.dead) return;
    w.hp -= dmg;
    st.hits++;
    woundAt(h.el, x, y, st.weapon.tier >= 4);
    gainXp(dmg);
    if (w.hp <= 0) kill(h.idx, h.cue, h.el, w);
  }

  /* ---------- evasion: the words learn to fear you ---------- */
  function evasion() {
    const lvl = st.level;
    const t = bridge.time();
    bridge.mounted().forEach(function (el, idx) {
      const cue = bridge.cues()[idx];
      const w = st.words.get(idx);
      if (w && w.dead) return;
      const flinch = FLINCH.some(function (f) { return Math.abs(cue.s - f) < 0.02; });
      if (lvl < 3 && !flinch) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = cx - st.ptr.x, dy = cy - st.ptr.y;
      const d = Math.hypot(dx, dy);
      const R = flinch && lvl < 3 ? 90 : 120 + 20 * lvl;
      const ev = (w || wordState(idx, cue, el)).evade;
      if (d < R && d > 1) {
        const push = flinch && lvl < 3 ? 5 : [0, 0, 0, 8, 16, 30, 44][lvl];
        const k = (1 - d / R) * push;
        ev.x += ((dx / d) * k - ev.x) * 0.16;
        ev.y += ((dy / d) * k - ev.y) * 0.16;
      } else {
        ev.x *= 0.9; ev.y *= 0.9;
      }
      if (Math.abs(ev.x) > 0.2 || Math.abs(ev.y) > 0.2) el.style.translate = ev.x.toFixed(1) + "px " + ev.y.toFixed(1) + "px";
      else el.style.translate = "";
    });
  }

  /* ---------- public api (wired from app.js) ---------- */
  window.__game = {
    init: function (b) {
      bridge = b;
      stage = b.stage;
      cueLayer = b.cueLayer;
      weaponEl = document.getElementById("weapon");
      lvlEl = document.getElementById("lvlup");
      scarCv = document.getElementById("scars");
      scarCtx = scarCv.getContext("2d");
      const fit = function () {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const img = scarCv.width ? scarCtx.getImageData(0, 0, scarCv.width, scarCv.height) : null;
        scarCv.width = stage.clientWidth * dpr;
        scarCv.height = stage.clientHeight * dpr;
        scarCv.style.width = stage.clientWidth + "px";
        scarCv.style.height = stage.clientHeight + "px";
        scarCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (img) scarCtx.putImageData(img, 0, 0);
      };
      fit();
      window.addEventListener("resize", fit);

      new Image().src = "assets/ding/slugger.png";     // warm the max-level bat

      window.addEventListener("pointermove", function (e) {
        st.ptr.x = e.clientX; st.ptr.y = e.clientY;
        if (st.on || st.endMode) {
          weaponEl.style.left = e.clientX + "px";
          weaponEl.style.top = e.clientY + "px";
          weaponEl.classList.add("is-here");
        }
      });
      window.addEventListener("mouseout", function (e) { if (!e.relatedTarget) weaponEl.classList.remove("is-here"); });
      stage.addEventListener("pointerdown", function (e) {
        if (!st.on) return;
        st.ptr.x = e.clientX; st.ptr.y = e.clientY;
        weaponEl.style.left = e.clientX + "px";
        weaponEl.style.top = e.clientY + "px";
        strike(e.clientX, e.clientY);
        e.preventDefault();
      });
      // the song is over, but you can keep wrecking the background
      document.getElementById("endcard").addEventListener("pointerdown", function (e) {
        if (!st.endMode) return;
        if (e.target.closest(".endcard__link, .endcard__btn")) return;
        weaponEl.style.left = e.clientX + "px";
        weaponEl.style.top = e.clientY + "px";
        weaponEl.classList.remove("is-swing"); void weaponEl.offsetWidth; weaponEl.classList.add("is-swing");
        scar(e.clientX, e.clientY, st.weapon.tier >= 6);
        shake(st.weapon.tier >= 6 ? 6 : 4);
      });
    },
    start: function () {         // fresh run (play or replay)
      st.on = true;
      st.endMode = false;
      st.weapon = WEAPONS.fist; st.level = 1; st.xp = 0; st.hits = 0; st.kills = 0;
      st.words.clear(); st.choosing = null;
      scarCtx.clearRect(0, 0, scarCv.width, scarCv.height);
      lvlEl.classList.remove("is-on");
      weaponEl.innerHTML = weaponFace(WEAPONS.fist);
      weaponEl.style.fontSize = "37px";
      document.body.classList.add("gaming");
    },
    onMount: function (idx, cue, el) {
      const w = st.words.get(idx);
      if (w && w.dead) el.style.visibility = "hidden";     // dead stays dead (strobes, remounts)
    },
    onUnmount: function () {},
    tick: function () { if (st.on) evasion(); },
    onEnd: function () {
      st.on = false;
      st.endMode = true;          // the wrecking doesn't have to stop
      const v = document.getElementById("verdict");
      if (v) {
        if (st.hits > 0) {
          v.textContent = "you hurt me " + st.hits + " times";
          v.hidden = false;
        } else v.hidden = true;
      }
    },
    get state() { return st; },
  };
})();
