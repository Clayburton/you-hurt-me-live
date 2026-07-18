/* ============================================================
   you hurt me — cue sheet
   Authored from a 580-element frame-exact segmentation of the
   4K master (every s/e = real appear/disappear frames).
   Faces: Adobe kit (Helvetica Neue LT Pro, Clarendon URW, …)
   + Bodoni Moda + Georgia. Times in seconds.
   ============================================================ */
/* font stacks (shorthand) */
const HN  = '"helvetica-neue-lt-pro","Helvetica Neue",Helvetica,Arial,sans-serif';
const HNC = '"helvetica-neue-lt-pro-cond","Arial Narrow","Helvetica Neue",sans-serif';
const GA  = 'Georgia,"Times New Roman",serif';
const BM  = '"Bodoni Moda","Bodoni 72",Didot,"Playfair Display",serif';
const CL  = '"clarendon-urw",Georgia,serif';
const RND = '"arial-rounded-mt-pro","Arial Rounded MT Bold","Baloo 2",sans-serif';
const VAG = '"vag-rundschrift-d","Baloo 2",sans-serif';
const STEN= '"stencil-std",sans-serif';
const ROSE= '"rosewood-std-daphne",serif';
const COTT= '"cottonwood-std",serif';
const ARTZ= '"hwt-artz",serif';
const BRUSH='"brush-script-std",cursive';
const FELT= '"felt-tip-roman",cursive';
const LGO = '"letter-gothic-std","Courier Prime",monospace';
const PRES= '"prestige-elite-std","Courier Prime",monospace';
const LTCB= '"ltc-bodoni-175",serif';
const MARC= '"p22-marcel-script-pro",cursive';
const ROCK= '"Rock Salt",cursive';

const CUES = [];
function C(o) { CUES.push(o); }

/* ================= INTRO ================= */
// title card
C({ s:0.000, e:0.801, text:"you hurt me",   role:"sans", weight:400, fit:0.60, y:46.5 });
C({ s:0.000, e:0.801, text:"clay and kelsy",role:"sans", weight:400, fit:0.42, y:57.5 });

// hummed m-runs, typing char by char (3 frames per char)
C({ s:2.202, e:3.003, role:"sans", weight:400, size:5.8, y:51, noClamp:true,
    steps:["m","mm","mmm","mmmm","mmmm-","mmmm-m","mmmm-mm","mmmm-mmm"] });
C({ s:3.570, e:4.037, role:"sans", weight:400, size:5.8, y:51, noClamp:true,
    steps:["m","mm","mmm","mmmm","mmmmm"] });
C({ s:4.938, e:6.139, role:"sans", weight:400, size:5.8, y:51, noClamp:true,
    steps:["m","mm","mmm","mmmm","mmmmm","mmmmmm","mmmmmm-","mmmmmm-m","mmmmmm-mm","mmmmmm-mm-","mmmmmm-mm-m","mmmmmm-mm-mm"] });
C({ s:6.807, e:8.408, role:"sans", weight:400, size:5.8, y:51, noClamp:true,
    steps:["m","mm","mmm","mmmm","mmmmm","mmmmmm","mmmmmm-","mmmmmm-m","mmmmmm-mm","mmmmmm-mmm","mmmmmm-mmm-","mmmmmm-mmm-m","mmmmmm-mmm-mm","mmmmmm-mmm-mm-","mmmmmm-mmm-mm-m","mmmmmm-mmm-mm-mm"] });

C({ s:9.410,  e:10.377, text:"you're running away", role:"sans", weight:700, fit:0.58, y:50 });
C({ s:11.045, e:12.012, text:"running away",        role:"sans", weight:400, fit:0.18, y:52.5 });

// sung "yeaaaaa-aaa-a" — serif italic, typing
C({ s:14.915, e:16.216, role:"serifIt", size:9.4, y:52, noClamp:true,
    steps:["y","ye","yea","yeaa","yeaaa","yeaaaa","yeaaaaa","yeaaaaa-","yeaaaaa-a","yeaaaaa-aa","yeaaaaa-aaa","yeaaaaa-aaa-","yeaaaaa-aaa-a"] });

// "And I can't see your face" — word by word (the window slides)
C({ s:16.750, e:17.951, role:"serif", weight:400, size:8.8, y:50, noClamp:true,
    steps:["And","And I","can’t","can’t see","can’t see your","can’t see your face"],
    stepTimes:[0, 0.100, 0.200, 0.434, 0.667, 0.834] });
C({ s:18.585, e:18.685, text:"no", role:"didoneIt", weight:500, size:14, y:52 });
C({ s:18.685, e:19.919, role:"serif", weight:400, size:8.8, y:50, noClamp:true,
    steps:["I","I can’t","I can’t see","I can’t see your","I can’t see your face"],
    stepTimes:[0, 0.100, 0.334, 0.534, 0.667] });

C({ s:21.822, e:23.323, text:"HEY!", role:"didoneIt", weight:800, size:10.5, y:49.5 });
C({ s:24.291, e:25.092, text:"so tell me",         role:"sans", weight:700, fit:0.33, y:49 });
C({ s:25.092, e:26.326, text:"what you wanna say", role:"sans", weight:700, fit:0.66, y:50 });
C({ s:28.028, e:28.462, text:"tell me",            role:"sans", weight:700, style:"italic", fit:0.21, y:49 });
C({ s:28.462, e:29.363, text:"what you wanna",     role:"sans", weight:700, fit:0.60, y:50 });

// the "say" scream grows into a wall of a's (overflows the frame — meant to)
C({ s:29.363, e:30.564, role:"round", size:29, y:54.5, noClamp:true,
    steps:["say","saay","saaay","saaaay","saaaaay","saaaaaay","saaaaaaay","saaaaaaaay","saaaaaaaaay","saaaaayyaaaa","saaaayyyaaaa","saaaayyyyaaa"] });

/* ================= VERSE 2 ================= */
C({ s:37.271, e:38.772, text:"you'll never ask me", role:"serif", weight:700, fit:0.71, y:50 });
C({ s:40.641, e:43.210, text:"when you walk away",  role:"serifIt", size:6.7, y:52 });
C({ s:44.678, e:44.878, text:"CAUSE",              role:"didone", weight:900, stretch:0.55, fit:0.34, fitH:0.24, y:50 });
C({ s:44.878, e:47.381, text:"YOU NEVER ASKED ME", role:"didone", weight:900, stretch:0.55, fit:1.2,  fitH:0.24, y:50, noClamp:true });
C({ s:49.917, e:51.418, text:"BUT IT FEELS GOOD",   role:"serif", size:3.8, track:0.14, y:52 });
C({ s:52.052, e:53.186, text:"YOU'LL NEVER ASK ME", role:"serif", track:0.30, fit:0.97, y:50 });

// "why does it feel good" — accumulating serif italic
C({ s:57.124, e:58.892, role:"serifIt", size:13.5, y:50, noClamp:true,
    steps:["why","why does","why does it","why does it feel","why does it feel good"],
    stepTimes:[0, 0.334, 0.700, 0.900, 1.401] });
C({ s:59.393, e:60.093, text:"when you say", role:"sans", weight:500, fit:0.48, y:51 });
C({ s:60.627, e:60.894, text:"“you'll”",              role:"didoneIt", weight:600, fit:0.24, y:51 });
C({ s:60.894, e:61.428, text:"“you'll never”",        role:"didoneIt", weight:600, fit:0.44, y:51 });
C({ s:61.428, e:62.129, text:"“you'll never change”", role:"didoneIt", weight:600, fit:0.68, y:51 });
C({ s:63.430, e:64.364, text:"NO YOU KNOW",     role:"serif", track:0.16, fit:0.46, y:51 });
C({ s:64.765, e:65.699, text:"YOU WALKED AWAY", role:"serif", weight:700, fit:0.64, y:51 });

// IT WAS A CHOICE + accumulating dots
C({ s:66.900, e:67.834, text:"IT WAS A CHOICE.", role:"sans", weight:400, fit:0.53, y:50 });
C({ s:67.834, e:68.334, role:"sans", weight:400, size:8.6, y:50, noClamp:true,
    steps:["IT WAS A CHOICE..","IT WAS A CHOICE...","IT WAS A CHOICE....","IT WAS A CHOICE.....","IT WAS A CHOICE......"] });

// the square-pulse metronome
C({ s:68.334, e:71.772, role:"sans", weight:400, size:2.6, y:54, track:0.55, noClamp:true,
    steps:["■","■ ■","■ ■ ■","■ ■ ■ ■"], stepLoop:true });

// YOU MADE A CHOICE. — weights walk up
C({ s:71.772, e:72.139, text:"YOU",     role:"sans", weight:100, size:20, y:52 });
C({ s:72.139, e:72.439, text:"MADE",    role:"sans", weight:500, size:18.5, y:52 });
C({ s:72.439, e:72.639, text:"A",       role:"sans", weight:100, size:18.5, y:52 });
C({ s:72.639, e:75.209, text:"CHOICE.", role:"sans", weight:700, fit:0.71, y:52.5 });

/* ================= BRIDGE ================= */
C({ s:81.648, e:82.349, role:"sans", weight:400, size:2.0, y:52, noClamp:true,
    steps:["m","mm","mmm","mmmm","mmmm-","mmmm-m","mmmm-mm"] });
C({ s:83.150, e:84.451, text:"im fading away", role:"didoneIt", weight:500, fit:0.67, y:50 });
C({ s:84.651, e:85.952, text:"fading away",    role:"didoneIt", weight:500, fit:0.23, y:52.5 });
C({ s:86.153, e:87.454, text:"fading away",    role:"didoneIt", weight:500, fit:0.12, y:52.5 });
C({ s:88.155, e:88.856, role:"sans", weight:400, style:"italic", size:6.7, y:50, noClamp:true,
    steps:["u","uh","uhh","uhhh","uhhhh","uhhhhh"] });
C({ s:90.891, e:91.625, role:"serif", weight:400, size:9.5, y:50, noClamp:true,
    steps:["i","i don’t","i don’t know"], stepTimes:[0, 0.100, 0.434] });
C({ s:92.459, e:93.427, text:"how to walk away", role:"serifIt", size:6.7, y:52.5 });

// the strobing giant "hey"
C({ s:95.696, e:97.197, text:"hey", role:"serifIt", fit:0.41, fitH:0.60, y:51, strobe:[0.1001,0.1001] });

/* ================= CHORUS 2 ================= */
C({ s:98.065, e:98.332, text:"so",          role:"sans", weight:700, size:8.6, y:50 });
C({ s:98.332, e:98.732, text:"so tell",     role:"sans", weight:700, fit:0.23, y:49 });
C({ s:98.732, e:98.999, text:"so tell me",  role:"sans", weight:700, fit:0.38, y:49 });
C({ s:98.999, e:100.434,text:"what you want to say", role:"sans", weight:700, fit:0.71, y:50 });
C({ s:101.902,e:102.169,text:"TELL", role:"sans", weight:700, track:0.30, fit:0.68, y:50 });
C({ s:102.169,e:102.436,text:"M E",  role:"sans", weight:700, fit:0.38, y:50 });
// the arc-warped line
C({ s:102.436,e:104.204,text:"what you want to say", role:"cond", weight:900, fx:"arch", archAmp:0.24, fit:0.75, fitH:0.50, y:51 });

/* ---------- the echo storm: "you'll never ask me" + (why?) satellites ---------- */
const PH = function (s, e, x, y, sz) { C({ s:s, e:e, text:"you'll never ask me", role:"serif", weight:700, size:(sz||5.5), x:x, y:y }); };
const WH = function (s, e, x, y, sz) { C({ s:s, e:e, text:"(why?)", role:"serif", weight:400, size:(sz||2.6), x:x, y:y }); };
PH(107.474,107.641,50,56);
PH(107.641,108.075,43,52);  WH(107.641,108.075,25,31);
PH(108.075,108.275,50,55);  WH(108.075,108.275,24,30);  WH(108.075,108.275,75,80);
PH(108.275,108.475,48,61);  WH(108.275,108.475,75,79);
PH(108.475,108.608,46,57);  WH(108.475,108.608,74,36);  WH(108.475,108.608,77,79);
PH(108.608,109.109,37,60);  WH(108.608,109.109,66,38);  WH(108.608,109.109,13,85);
PH(109.109,109.209,52,64);  WH(109.109,109.209,17,53);
PH(109.209,109.243,50,64);  WH(109.209,109.243,13,51);  WH(109.209,109.243,90,92);
PH(109.243,109.676,56,59);  WH(109.243,109.676,41,50);  WH(109.243,109.676,91,93);
PH(109.676,109.776,46,64);  WH(109.676,109.776,87,31);  WH(109.676,109.776,84,94);
WH(109.776,109.843,48,31);  WH(109.776,109.843,88,95);
WH(109.843,110.110,24,28,3.2);
WH(110.110,110.310,24,29);  WH(110.110,110.310,46,49);
WH(110.310,110.510,48,50,3.2);
WH(110.510,110.644,70,33);  WH(110.510,110.644,50,48);
WH(110.644,110.744,66,34);  WH(110.644,110.744,38,55);  WH(110.644,110.744,64,88);
WH(110.744,111.011,63,40);  WH(110.744,111.011,48,80);
WH(111.011,111.144,70,33);  WH(111.011,111.144,56,42);  WH(111.011,111.144,38,85);
WH(111.144,111.244,60,50);  WH(111.144,111.244,44,86);
WH(111.244,111.278,45,52);  WH(111.244,111.278,88,90);
WH(111.278,111.444,66,50);  WH(111.278,111.444,94,92);
WH(111.444,111.644,66,50);  WH(111.444,111.644,94,92);
WH(111.644,111.878,74,69);  WH(111.644,111.878,92,94);
WH(111.878,112.079,73,68);  WH(111.878,112.079,76,81);
WH(112.079,112.279,77,82);
WH(112.279,112.412,72,35);  WH(112.279,112.412,77,80);
WH(112.412,112.512,75,36);  WH(112.412,112.512,12,52);  WH(112.412,112.512,48,80);
WH(112.512,112.779,9,38);   WH(112.512,112.779,70,45);
WH(112.779,112.913,12,22);  WH(112.779,112.913,70,30);  WH(112.779,112.913,8,47);
WH(112.913,113.046,30,22);  WH(112.913,113.046,6,49);
WH(113.046,113.413,44,50,3.2);

/* ---------- "i wish, i still felt the same way about you. yeah" ---------- */
C({ s:113.647, e:119.453, text:"i wish,", role:"serif", weight:700, x:8,  y:13, anchor:"tl", align:"left", size:8.8 });
C({ s:114.348, e:119.453, role:"serif", weight:700, x:22, y:42.5, anchor:"tl", align:"left", size:8.8, noClamp:true,
    steps:["i still felt","i still felt the same"], stepTimes:[0, 1.101] });
C({ s:116.483, e:119.453, role:"serif", weight:700, x:8,  y:57.5, anchor:"tl", align:"left", size:8.8, noClamp:true,
    steps:["way","way about","way about you."], stepTimes:[0, 0.968, 1.768] });
C({ s:118.952, e:119.453, text:"yeah", role:"serif", weight:700, x:57, y:70, anchor:"tl", size:8.8 });

/* ---------- AND IT FEELS GOOD (condensed serif strobes) ---------- */
const AIF = { role:"didone", weight:500, stretch:0.62, y:50, noClamp:true };
C(Object.assign({ s:123.857, e:124.825, text:"AND IT FEELS GOOD", fit:0.97, fitH:0.15 }, AIF));
C(Object.assign({ s:124.925, e:125.425, text:"AND IT FEELS GOOD", fit:0.97, fitH:0.15, strobe:[0.1001,0.1001] }, AIF));
C(Object.assign({ s:125.526, e:125.626, text:"AND IT FEELS GOOD TO",     fit:0.97, fitH:0.15 }, AIF));
C(Object.assign({ s:125.726, e:125.826, text:"AND IT FEELS GOOD TO YOU", fit:0.97, fitH:0.15 }, AIF));
C(Object.assign({ s:125.926, e:127.028, text:"AND IT FEELS GOOD TO YOU", fit:0.97, fitH:0.15, strobe:[0.1001,0.1001] }, AIF));

C({ s:129.596, e:130.263, text:"ah", role:"serifIt", size:4, y:52.5 });
C({ s:131.431, e:131.998, text:"WHY", role:"didoneIt", weight:800, size:8.6, y:50 });
C({ s:131.998, e:133.166, text:"DOES IT FEEL GOOD?", role:"didoneIt", weight:600, track:0.06, fit:0.54, y:51 });

// the giant piling question marks
C({ s:133.166, e:133.667, role:"didone", weight:400, size:40, y:49, noClamp:true,
    steps:["?","??","???","????","?????"] });

C({ s:133.734, e:135.001, text:"when you say", role:"sans", weight:400, fit:0.42, y:51.5 });
C({ s:135.168, e:135.301, text:"YOU'LL",       role:"didone", weight:700, fit:0.23, y:50 });
C({ s:135.435, e:135.568, text:"YOU'LL NEVER", role:"didone", weight:700, fit:0.46, y:50 });
C({ s:135.702, e:137.170, text:"YOU'LL NEVER CHANGE", role:"didone", weight:700, fit:0.74, y:50, strobe:[0.1335,0.1335] });
C({ s:137.403, e:138.271, text:"WHEN YOU SAY", role:"sans", weight:300, track:0.24, fit:0.51, y:50 });

// blast 1: YOU'LL NEVER CHANGE through the weights
C({ s:138.771, e:138.905, text:"YOU'LL",              role:"cond", weight:700, fit:0.19, y:49 });
C({ s:139.038, e:139.172, text:"YOU'LL NEVER",        role:"sans", weight:700, fit:0.38, y:50 });
C({ s:139.305, e:139.439, text:"YOU'LL NEVER CHANGE", role:"sans", weight:700, fit:0.64, y:49 });
C({ s:139.572, e:139.706, text:"YOU'LL NEVER CHANGE", role:"cond", weight:700, fit:0.65, y:50 });
C({ s:139.839, e:139.972, text:"YOU'LL NEVER CHANGE", role:"sans", weight:300, style:"italic", fit:0.59, y:50 });
C({ s:140.106, e:140.239, text:"YOU'LL NEVER CHANGE", role:"sans", weight:700, style:"italic", fit:0.65, y:50 });
C({ s:140.373, e:140.506, text:"YOU'LL NEVER CHANGE", role:"sans", weight:100, style:"italic", fit:0.57, y:50 });
C({ s:140.639, e:140.773, text:"YOU'LL NEVER CHANGE", role:"cond", weight:900, fit:0.64, y:49 });

// YEAH ×3 growing
C({ s:140.906, e:141.040, text:"YEAH", role:"cond", weight:900, size:11,  y:51 });
C({ s:141.173, e:141.307, text:"YEAH", role:"cond", weight:900, size:16,  y:51 });
C({ s:141.440, e:141.574, text:"YEAH", role:"cond", weight:900, size:23,  y:51 });

C({ s:144.244, e:144.845, text:"WHY", role:"didoneIt", weight:800, size:7.6, y:52 });
C({ s:144.845, e:146.679, role:"didoneIt", weight:600, track:0.05, size:9.4, y:51, noClamp:true,
    steps:["DOES IT FEEL GOOD?","DOES IT FEEL GOOD??","DOES IT FEEL GOOD???","DOES IT FEEL GOOD????","DOES IT FEEL GOOD?????","DOES IT FEEL GOOD??????","DOES IT FEEL GOOD???????","DOES IT FEEL GOOD????????"],
    stepTimes:[0, 1.135, 1.235, 1.335, 1.435, 1.535, 1.635, 1.735] });

// bold ↔ italic alternation
C({ s:146.679, e:147.980, text:"DOES IT FEEL GOOD", role:"didone", weight:700, fit:0.97, y:51, strobe:[0.1001,0.1001] });
C({ s:146.779, e:147.980, text:"DOES IT FEEL GOOD????????", role:"didoneIt", weight:600, fit:0.72, y:51, strobe:[0.1001,0.1001] });
// YEAH cuts in
C({ s:147.980, e:148.781, text:"YEAH", role:"didoneIt", weight:600, size:13, y:51, strobe:[0.1001,0.1001] });
C({ s:148.080, e:148.581, text:"DOES IT FEEL GOOD", role:"didone", weight:700, fit:0.97, y:51, strobe:[0.1001,0.3003] });
C({ s:148.281, e:148.781, text:"DOES IT FEEL GOOD????????", role:"didoneIt", weight:600, fit:0.72, y:51, strobe:[0.1001,0.3003] });
// YEAH italic/roman ping-pong
C({ s:148.781, e:149.982, text:"YEAH", role:"didone", size:12.5, y:51,
    fontCycle:[[BM,400,"italic"],[BM,700,"normal"]] });

/* ---------- the (mmm) typeface carousel ---------- */
C({ s:149.982, e:153.287, text:"(mmm)", role:"serif", size:7, y:51.5,
    fontCycle:[[GA,400,"normal"],[BM,700,"italic"],[BM,700,"normal"],[HN,400,"normal"],
               [HN,700,"italic"],[GA,400,"italic"],[GA,700,"normal"],[HN,300,"normal"]] });

/* ---------- cause / you'll / never / ask / me word ping-pong ---------- */
C({ s:153.287, e:156.492, size:8, y:51.5, role:"serif", noClamp:true,
    steps:["cause","you'll","cause","you'll","cause","you'll","never","you'll","never","you'll","never","ask","never","ask","never","ask","never","ask","me","ask","me","ask","me","ask","me","me","me","me","me","me","me","me"],
    stepFonts:[[CL,700],[BM,700],[GA,700],[BM,700],[GA,400],[BM,700],[GA,700],[BM,700],[BM,700],[BM,700],[GA,700],[GA,700],[BM,700],[GA,700],[BM,700],[GA,700],[BM,700],[GA,700],[BM,700],[GA,700],[BM,700],[GA,700],[BM,700],[GA,700],[BM,700],[BM,300],[BM,700],[BM,300],[BM,700],[BM,300],[BM,700],[BM,300]] });

/* ---------- punctuation percussion ---------- */
C({ s:156.492, e:158.193, size:4.2, y:52.5, role:"serif", noClamp:true,
    steps:[".",",",",",".",".",".",",",".",",",",",",",".","’","◆",",",".","/"],
    stepFonts:[[GA,400],[BM,400],[BM,700],[HN,400],[GA,700],[GA,400],[BM,700],[HN,700],[GA,400],[BM,700],[GA,400],[HN,400],[BM,700],[HN,400],[GA,700],[GA,400],[BM,400]] });

/* ---------- the Webdings barrage ---------- */
const D = "assets/ding/";
function IMG(s, e, name, size, y) { C({ s:s, e:e, img:D + name + ".png", size:size, y:(y||50) }); }

IMG(158.193,158.293,"mailbox",9.5);
IMG(158.293,158.393,"docs",10.5);
C({ s:158.393, e:159.094, text:"you hurt me", role:"clar", fit:0.31, y:51, strobe:[0.1001,0.1001] });
IMG(159.194,159.294,"checkers",13.5);
IMG(159.294,159.394,"arrow-corner",9.5);
C({ s:159.394, e:160.495, role:"sans", size:5, y:50, noClamp:true,
    steps:["▲","▶","◀","▼"], stepLoop:true });

// "you hurt me" — the typeface blast
C({ s:160.495, e:163.700, text:"you hurt me", size:9, y:51,
    fontCycle:[[CL,700,"italic"],[BM,600,"italic"],[HN,400,"normal"],[CL,700,"normal"],
               [HN,100,"normal"],[GA,400,"italic"],[CL,700,"italic"],[BM,500,"normal"],
               [HN,400,"normal"],[CL,700,"normal"],[HN,100,"normal"],[BM,400,"italic"]] });

IMG(163.700,165.201,"ffwd",7.6);  CUES[CUES.length-1].strobe = [0.1001,0.1001];
C({ s:165.301, e:167.102, text:"you hurt me", role:"clar", fit:0.48, y:51 });
IMG(167.202,168.303,"rwd",7.6);   CUES[CUES.length-1].strobe = [0.1001,0.1001];

// oh ↔ webding-oh
[168.403,168.603,168.803].forEach(function (t) { C({ s:t, e:t+0.1001, text:"oh", role:"serif", size:10.5, y:49 }); });
[168.503,168.703,168.903].forEach(function (t) { IMG(t, t+0.1001, "oh-webding", 8.6); });
// you ↔ webding-you
[169.003,169.203,169.403,169.603].forEach(function (t) { C({ s:t, e:t+0.1001, text:"you", role:"didone", weight:600, size:14.5, y:50 }); });
[169.103,169.303,169.503].forEach(function (t) { IMG(t, t+0.1001, "you-webding", 12.5); });
// hurt ↔ webding-hurt
[169.703,169.903,170.103,170.303].forEach(function (t) { IMG(t, t+0.1001, "hurt-webding", 12.5); });
[169.803,170.003,170.203].forEach(function (t) { C({ s:t, e:t+0.1001, text:"hurt", role:"didone", weight:600, size:15.5, y:47 }); });
// me ↔ webding-me
[170.403,170.603,170.803,171.004,171.204,171.410].forEach(function (t) { C({ s:t, e:t+0.1001, text:"me", role:"didone", weight:600, size:9.5, y:49.5 }); });
[170.503,170.703,170.903,171.104,171.304,171.504].forEach(function (t) { IMG(t, t+0.1001, "me-webding", 11.5); });
// spider ↔ burst
[171.604,171.805,172.005,172.205].forEach(function (t) { IMG(t, t+0.1001, "spider", 13.5, 48.5) });
[171.705,171.905,172.105,172.306].forEach(function (t) { IMG(t, t+0.1001, "burst", 11.5, 47.5) });

C({ s:172.406, e:172.907, text:"OH", role:"sans", weight:100, size:21, y:52 });
IMG(172.907,173.007,"bubbles",17);
C({ s:173.007, e:173.107, text:"?", role:"didone", weight:600, size:14.5, y:49.5 });
IMG(173.107,173.207,"bubbles",17);
C({ s:173.207, e:173.307, text:"?", role:"didone", weight:600, size:14.5, y:49.5 });

// the full-height stack
C({ s:173.307, e:174.708, text:"YOU\nHURT\nME", role:"sans", weight:300, lh:1.04, track:0.02, fit:0.50, fitH:0.92, y:50 });

// eye ↔ ear
[174.708,174.908,175.108].forEach(function (t) { IMG(t, t+0.1001, "eye", 8.6, 48.5) });
[174.808,175.008,175.208].forEach(function (t) { IMG(t, t+0.1001, "ear", 13.5, 48.5) });

C({ s:175.308, e:175.809, text:"OH", role:"sans", weight:700, fit:0.94, fitH:0.85, y:50 });

// droplet ↔ heart
[175.809,176.009,176.209].forEach(function (t) { IMG(t, t+0.1001, "droplet", 13.5, 47.5) });
[175.909,176.109].forEach(function (t) { IMG(t, t+0.1001, "heart", 9.5, 50) });

// you ↔ hurt ping-pong
[176.309,176.510,176.710,176.910].forEach(function (t) { C({ s:t, e:t+0.1001, text:"you", role:"didone", weight:700, size:10.5, y:51 }); });
[176.410,176.610,176.810].forEach(function (t) { C({ s:t, e:t+0.1001, text:"hurt", role:"didone", weight:700, size:10.5, y:49 }); });

/* ================= FINALE ================= */
C({ s:177.244, e:177.611, text:"ITS", role:"cond", weight:900, fit:0.97, fitH:0.88, y:50 });
C({ s:177.611, e:178.011, text:"NOT", role:"cond", weight:900, fit:0.97, fitH:0.88, y:50 });
C({ s:178.011, e:178.478, text:"MY",  role:"cond", weight:900, fit:0.97, fitH:0.88, y:50 });
C({ s:178.478, e:179.379, text:"FAULT", role:"cond", weight:900, fit:0.97, fitH:0.88, y:50, strobe:[0.1001,0.1001] });

C({ s:179.379, e:181.582, text:"(when you walked away)", role:"serifIt", size:5.7, y:56 });
C({ s:182.149, e:182.683, text:"(when you walked away)", role:"serifIt", weight:700, size:5.7, y:56 });
C({ s:183.083, e:184.618, text:"YOU'LL NEVER KNOW", role:"sans", weight:300, track:0.26, fit:0.88, y:52 });
C({ s:184.918, e:186.820, text:"YOU'LL NEVER KNOW", role:"sans", weight:700, fit:0.94, y:52 });
C({ s:186.820, e:188.588, text:"(when you walked away)", role:"serifIt", size:5.9, y:56 });
C({ s:189.522, e:190.089, text:"(when you walked away)", role:"serifIt", weight:700, size:5.9, y:56 });

/* ---------- CAUSE IT FEELS / GOOD TO YOU — the typeface festival ---------- */
const CIF = "CAUSE IT FEELS\nGOOD TO YOU";
function blastSeg(s, e, faces) {
  C({ s:s, e:e, text:CIF, fit:0.9, fitH:0.72, lh:1.3, y:50, fontCycle:faces, role:"didone" });
}
blastSeg(190.089, 190.690, [
  [BM,600,"normal"], [LTCB,400,"italic"], [BM,500,"normal",0,0.62],
  [HN,300,"normal",0.18], [GA,400,"italic"], [HNC,700,"normal"],
]);
IMG(190.690,190.790,"cause-wingding",26);
blastSeg(190.790, 191.091, [
  [MARC,400,"normal"], [HNC,900,"normal"], [HN,400,"normal",0.14],
]);
IMG(191.091,191.191,"ornaments",34);
blastSeg(191.191, 192.092, [
  [PRES,400,"normal"], [HNC,900,"normal"], [LGO,700,"normal",0.10],
  [STEN,400,"normal"], [STEN,400,"normal"], [BRUSH,400,"normal"],
  [BM,400,"normal",0,0.72], [CL,700,"normal"], [ARTZ,400,"normal"],
]);
IMG(192.092,192.192,"hands-x",14);
blastSeg(192.192, 193.493, [
  [HNC,700,"normal",0,0.85], [HN,700,"italic"], [ROCK,400,"normal"],
  [HNC,900,"normal"], [BM,400,"normal",0.06], [HN,100,"normal",0.14],
  [RND,700,"normal"], [HN,700,"normal",0,1,"outline"], [VAG,400,"normal"],
  [HN,100,"normal",0.14], [FELT,400,"normal"], [ROSE,400,"normal"],
  [HN,700,"normal",0,1,"outline"],
]);

C({ s:194.161, e:194.595, text:"(when you walked away)", role:"sans", weight:400, fit:0.42, y:54 });
C({ s:194.595, e:195.129, text:"HEY!", role:"didoneIt", weight:900, fit:0.43, fitH:0.34, y:50 });
C({ s:195.996, e:196.463, text:"YOU'LL",             role:"didone", weight:500, fit:0.33, y:50 });
C({ s:196.463, e:197.230, text:"YOU'LL NEVER",       role:"didone", weight:500, fit:0.66, y:50 });
C({ s:197.230, e:198.331, text:"YOU'LL NEVER KNOW",  role:"didone", weight:500, fit:0.97, y:50 });
C({ s:198.331, e:198.765, text:"oh", role:"sans", weight:400, size:7.6, y:53 });
C({ s:199.065, e:199.499, text:"oh", role:"sans", weight:400, size:6.6, y:53.5 });
C({ s:199.799, e:200.233, text:"oh", role:"sans", weight:400, size:5.7, y:53.5 });
IMG(201.634,201.734,"tinyman",4.7,55.5);
IMG(202.635,202.735,"tinyman",4.7,55.5);
/* the finale: five separate words to defeat — they strobe with the song,
   then HOLD until each is killed or the video ends */
[["WHY", 12.47, 0.185], ["DON'T", 35.7, 0.24], ["YOU", 57.29, 0.158],
 ["SAY", 74.89, 0.152], ["IT?", 90.65, 0.121]].forEach(function (wd) {
  C({ s:204.537, e:219.30, text:wd[0], role:"cond", weight:900,
      fit:wd[2], fitH:0.27, stretch:0.62, x:wd[1], y:50,
      strobe:[0.3675,0.3675], strobeUntil:207.842 });
});

/* white to the end (song runs out ~219.6s) */

/* ============================================================
   CALIBRATION — measured fit-to-source pass (2026-07-17).
   Each cue was rendered, its ink measured against the source
   element table, and rescaled. Index-keyed (cue order is fixed).
   ============================================================ */
const CAL = {
  0:{fit:0.693}, 1:{fit:0.46},
  2:{size:11.3}, 3:{size:11.3}, 4:{size:11.3}, 5:{size:11.3},
  9:{size:12.7}, 10:{size:26}, 11:{size:9.75}, 12:{size:9.6},
  19:{size:6.18}, 20:{fit:0.20,fitH:0.30,stretch:0.32}, 21:{fit:0.68,fitH:0.30,stretch:0.32},
  22:{size:4.1}, 32:{size:10.75}, 33:{size:2.1}, 34:{size:29.9}, 35:{size:28},
  36:{size:29}, 38:{size:4.7}, 41:{fit:0.047}, 42:{size:9.4}, 43:{size:14.8},
  46:{size:14.4},
  52:{fit:0.76,fitH:0.44,stretch:0.44,archAmp:0.12},
  124:{fitH:0.135,stretch:0.81}, 125:{fitH:0.135,stretch:0.81}, 126:{fitH:0.135,stretch:0.81},
  127:{fitH:0.135,stretch:0.82}, 128:{fitH:0.135,stretch:0.82},
  129:{size:4.8}, 146:{size:12.1}, 148:{size:25}, 149:{size:8.4}, 150:{size:7.9},
  153:{size:15}, 156:{size:16.1}, 157:{size:7.6}, 158:{size:6.7}, 159:{size:7},
  166:{size:12.5}, 170:{size:15}, 171:{size:15}, 172:{size:15},
  176:{size:20.7}, 177:{size:20.7}, 178:{size:20.7}, 179:{size:20.7},
  187:{size:21.1}, 188:{size:21.1}, 189:{size:21.1},
  190:{size:19.8}, 191:{size:19.8}, 192:{size:19.8}, 193:{size:19.8}, 194:{size:19.8}, 195:{size:19.8},
  210:{size:28.4}, 212:{size:19.1}, 214:{size:19.1},
  222:{fit:0.94,fitH:2,sy:0.77},
  228:{size:15.6}, 229:{size:15.6}, 230:{size:15.6}, 231:{size:15.6},
  232:{size:16.8}, 233:{size:16.8}, 234:{size:16.8},
  235:{fit:0.97,fitH:2,sy:0.64}, 236:{fit:0.97,fitH:2,sy:0.865}, 237:{fit:0.78,fitH:2,sy:0.9},
  238:{sy:0.91},
  239:{size:3.6}, 240:{size:3.4}, 243:{size:4.1}, 244:{size:3.5},
  257:{size:8.2}, 259:{size:4.9},
};
for (const k in CAL) Object.assign(CUES[k], CAL[k]);
