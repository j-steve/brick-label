const LEGOS = [
  // Slope
  {id: 3040, title: '1 x 2'},
  {id: 60477, title: '1 x 4'},
  {id: 3039, title: '2 x 2'},  
  {id: 3298, title: '2 x 3'}, 
  {id: 30363, title: '2 x 4'},
  {id: 3684, title: '2 x 2 x 3'},
  // Brick
  {id: 3005},
  {id: 3005, color: 'black'},
  {id: 3004},
  {id: 3004, color: 'black'},
  {id: 3004, color: 'yellow'},
  {id: 3004, color: 'silver', colorGradiant: true},
  {id: 3004, color: 'blue'},
  {id: 3004, color: 'red'},
  {id: 3622},
  {id: 3010},
  {id: 3009},
  {id: 3008},
  {id: 6111},
  {id: 6112},
  {id: 2357, title: 'Corner'},
  {id: 3003},
  {id: 3002},
  {id: 3001},
  {id: 2456},
  {id: 3007},
  {id: 3006},
  // Brick, Round
  {id: 3063, title: '2 x 2', subtitle: 'Corner Macaroni'},
  // Plate
  {id: 3024},
  {id: 3023},
  {id: 3623},
  {id: 3623, color: 'black'},
  {id: 3710},
  {id: 3666},
  {id: 3460},
  {id: 4477},
  {id: 60479},
  {id: 2420, title: 'Corner'},
  {id: 11212},
  {id: 3031},
  {id: 3032},
  {id: 3035},
  {id: 3030},
  {id: 3958},
  {id: 3036},
  // Plate Round
  {id: 4073},
  {id: 24866, title: 'Flower', subtitle: '5 petals', size: 1, imageColor:'PL', imagePath: 'https://img.bricklink.com/ItemImage/PL/24866.png'},
  {id: 4032, title: '2 x 2', subtitle: 'w/Axel Hole'},
  {id: 2654, title: '2 x 2', subtitle: 'w/Rounded Bottom'},
  // Plate Modified
  {id: 61252, title: '1 x 1', subtitle: 'w/Horizontal Clip'},
  {id: '4085d', title: '1 x 1', subtitle: 'w/Vertical Clip'},
  {id: '4081b', subtitle: 'w/Light Clip'},
  {id: 15070},
  {id: 15573},
  // Tile
  {id: 3029},
  // Tile, Modified
  {id: '2412b', title: 'Grille', size: 2},
  {id: '2412b', title: 'Grille', size: 2, color: 'white'},
  // Other
  {id: 4150, color: 'red'},
  {id: 6541},
  {id: 11609, title: 'Star', imageColor: 110},
  {id: '4599b', title: 'Tap', subtitle: 'w/o Hole'},
  {id: '3626ap01', title: 'Heads', assorted: true, subtitle: 'Legacy Style', category: 'Minifigure', imageColor: 3},
  {id: '3626cpb2539', title: 'Heads', assorted: true, subtitle: 'New Style', category: 'Minifigure', imageColor: 3},
  {id: '95327pb01', title: 'Animals', subtitle: 'Small', assorted: true, imagePath: 'https://img.bricklink.com/ItemImage/PN/11/95327pb01.png', category: 'Animals'},
];

const LEGOS2 = [
  {id: 3832},
  {id: 3034},
  {id: 3795},
  {id: 2877},
  {id: 3941, colorTranslucent: true},
  {id: 3700},
  {id: 2465, color: COLOR.lightBluishGray},
  {id: 3795, color: COLOR.black},
  {id: 11211},
  {id: 4070},
  {id: 3665},
  {id: 30136, title: '1 x 2', subtitle: 'Log'},
  {id: 30137, title: '1 x 4', subtitle: 'Log'},
  {id: 6091},
  {id: 2357, color: COLOR.black, title: 'Corner'},
  {id: 11477},
  {id: 98138},
  {id: 3032},
  {id: 3032, colorTranslucent: true},
  {id: 61506, imageColor: 69, category: 'Minifigure', title: 'Headgear', assorted: true},
  {id: '970c00', category: 'Minifigure', title: 'Legs', assorted: true},
  {id: '970c00', category: 'Minifigure', title: 'Legs', assorted: true, color: COLOR.lightBluishGray},
  {id: '973pb0079c01', imageColor: 11, category: 'Minifigure', title: 'Torso', assorted: true},
  {id: 2377, color: COLOR.white, title: '1 x 2 x 2', subtitle: 'Plane'},
  {id: 47457, subtitle: 'Two Studs Curved'},
  {id: 87620},
  {id: 14413},
  {id: 2432},
  {id: 24246},
  {id: 15070},
  {id: 49668},
  {id: 98283, imageColor: 150, subtitle: 'w/ Masonry Profile'},
  {id:3633, imageColor: 86},
  {id: 4865},
  {id:4864, subtitle: ' '},
  {id:'3062b'},
  {id:'3062a'},
  {id: 88293},
  {id:4728, imageColor:5, subtitle:'2×2 Rounded'},
  {id: 32607, imageColor:6, title: '1 x 1 with 3 Leaves', color:'#10cb31'},
  {id:  3741, imageColor:154},
  {id:3028},
  {id: 6021, imageColor: 8, assorted: true, title: 'Boats'},
  {id: 3021},
  {id: 3003, color: COLOR.red},
  {id: 3003, color: COLOR.blue},
  {id: 3003, color: COLOR.lightBluishGray},
  {id: 3003, color: COLOR.black},
  {id: 3003, color: COLOR.white},
  {id: 3002, color: COLOR.black},
  {id: 3002, color: COLOR.blue},
  {id: 3002, color: COLOR.red},
  {id: 2445},
  {id: 3001},
  {id: 3001, color: COLOR.red},
  {id: 3001, color: COLOR.blue},
  {id: 3010, color: COLOR.black},
  {id: 3010, color: COLOR.blue},
  {id: 3010, color: COLOR.yellow},
  {id: 2456, color: COLOR.blue},
  {id: 3020, color: COLOR.black},
  {id: 6636},
  {id:2540},
  {id:'3070b', subtitle: ' '},
  //new
  {id: 2453, title: '1×1×5', subtitle: ' '},
  {id: 2454, title: '1×2×5', subtitle: ' '},
  {id:  3710, color: COLOR.black},
  {id: 3009, color: COLOR.black},
  {id: 3009, color: COLOR.red},
  {id: 3022},
  {id: 3022, color: COLOR.black},
  {id: 3023, color: COLOR.black},
  {id: 3021, color: COLOR.black},
  {id: 63864},
  {id: 2431},
  {id: 3068, subtitle: ' '},
  {id: 87079},
  {id: 54200},
  {id: '3069b'},
  {id: '3069b', color: COLOR.white},
  {id: '3069b', color1: COLOR.mediumDarkFlesh, color2: COLOR.darkBluishGray},
  {id: 4287},
  {id: '3747b', imagePath: 'https://img.bricklink.com/ItemImage/PN/85/3747a.png', subtitle: ' '},
  {id: 4286},
  {id: 92946},
  {id: 3665},
  {id:4162},
  {id: 3685},
  {id:  2449},
  {id:  87087},
  {id:  4216},
  {id: 6249, imageColor: 85},
  {id: 30236},
  {id:  6107},
  {id: 2462},
  {id:  73092, title: 'Magnet', assorted: true},
  {id: 25269},
  {id: 4150, subtitle: 'Circle'},
  {id: 27925},
  {id: 27507},
  {id: 15712, subtitle: 'w/ Clip', assorted:true},
  {id: '3942c'},
  {id: 6254, imageColor: 89, color: COLOR.white, title: 'Ice Cream', titleSize: '15px'},
  {id: 33051, imageColor: 36, title: 'Food', assorted: true},
  {id: 3029},
  {id: 3029},
  {id: 30158, imageColor: 8, title: 'Back', subtitle: '& Shoulders', assorted: true, category: 'Minifigure', },
  {id:  11477 },
  {id:   15068 },
  {id: '3839b' , subtitle: 'w/ Handles'},
  {id: ' 3626cpb1424', title: 'Heads', assorted: true, subtitle: 'Colored', category: 'Minifigure', imageColor: 77, imagePath: 'https://img.bricklink.com/ItemImage/PN/77/3626cpb1424.png'},
  {id: '2429c01', title:'1 x 4', subtitle: 'Swivel Plate'},
];

const LEGOS3 = [
  {id: 2529, imageColor:8, color: COLOR.pearlGold},
  {id: 50950 },
  {id: 30140 , color: COLOR.brown},
  {id: 3001, color: COLOR.black},
  {id: 52107},
  {id: 3029},
  {id: 4079, subtitle: '2×2'},
  {id: 2445},
  {id: 2417, imageColor: 6},
  {id: 2423, imagePath:'https://img.bricklink.com/ItemImage/PN/155/2423.png'},
  {id: 4282},
  {id: 18746, imageColor: 110, assorted: true, title: 'Footwear', subtitle: ' ', category: 'Object', titleSize: '15px'},
  {id: 52, imageColor:3},
  {id: 3942},
  {id: 3020},
  {id: '3062b', colorTranslucent: true},
  {id: 15469, imageColor: 156},
  {id:  65617, imageColor: 86},
  {id: 2466},
  {id: 60581, subtitle: 'w/ Side Supports'},
  {id: 99781, subtitle: ' '},
  {id:  99780, subtitle: 'Inverted'},
  {id:  36840, subtitle: 'Inverted'},
  {id:  36841 , imageColor: 39, subtitle: ' '},
  {id: '2436b', title: '1 x 2 1 x 4 Side'},
  {id:  3659},
  {id: 4515},
  {id: 30145},
  {id:2571, imageColor: 156},
  {id: 2518, imageColor: 6},
  {id: 3935},
  {id: 3936},
  {id: 3936, otherIds: [3935], subtitle: 'Wing'},
  {id: 30503},
  {id: 2046},
  {id:  '3933a', subtitle: 'Wing Left'},
  {id:  '3934a', subtitle: 'Wing Right'},
  {id: '3933a', otherIds: ['3934a'], subtitle: 'Wing'},
  {id:  6106},
  {id: 6219},
  {id: 50303, otherIds: [2625], subtitle: 'Boat Bow Plate'},
  {id: 3586},
  {id: 3585},
  {id: 3585, otherIds: [3586], subtitle: 'Wing'},
  {id: 3455, otherIds: [92950]},
  {id:  6104, otherIds: [4475]},
  {id: 2413, otherIds: [14181], subtitle: ' '},
  {id: 4743, imageColor:7},
  {id: 2449, color: COLOR.black},
  {id: 3307 , otherIds: [15254, 12939], title: '1 x 6 x 2'},
  {id: 2448},
  {id: 2468},
  {id: 2483, imageColor:13},
  {id: 3702},
  {id: 3701},
  {id:  2507, imageColor: 9, titleSize: '14px'},
  {id: 6182 },
  {id: 4490 },
  {id:  30298, imageColor: 8, titleSize: '12px'},
  {id: '2418b', imageColor: 14, subtitle: 'Octagonal Canopy'},
  {id: 3894},
  {id: 3895 },
  {id: '2352b', imageColor: 23},
  {id: 4202 },
  {id: 2401 },
  {id: 60474 },
  {id:3308, otherIds: [16577]},
  {id: 4474 },
  {id: 6152, titleSize: '15px'},
  {id: 6070},
  {id: 63868, subtitle: 'w/ Horizontal Clip on End'},
  {id:  4204},
  {id: '3709b'},
  {id: 3738},
  {id: 93095, subtitle: 'w/ Center Divider' },
  {id:  32001},
];

const LEGOS4 = [
  {id: 4073, colorTranslucent: true},
  {id: 54200, colorTranslucent: true},
  {id: 4730, otherIds: [6232], subtitle: ' '},
  {id: 43093, otherIds: [3749], subtitle: ' '},
  {id: 4274, imageColor: 7, title: '½ Pin'},
  {id: 3673, imageColor: 86, title: 'Pin'},
  {id: 2437},
  {id: 60623, imageColor: 63},
  {id: '3829c01', title: 'Steering', subtitle: 'Wheel'},
  {id: 6148},
  {id: 88072, otherIds: [4623], subtitle: 'w/ Arm Up'},
  {id: '4489', title: 'Wagon', subtitle: 'Large Wheel'},
  {id: 2470, title: 'Wagon', subtitle: 'Small Wheel'},
  {id: 15573, color: COLOR.white},
  {id: 4864, subtitle: ' '},
  {id: 2362, subtitle: ' '},
  {id: 60478, subtitle: 'w/ Handle on End'},
  {id: 48336, subtitle: 'w/ Handle on Side'},
  {id: 92947},
  {id:  15469, imageColor: 156},
  {id:  33243 },
  {id: 6003 },
  {id: 4215 , subtitle: ' '},
  {id: 3742, imageColor: 3, title: 'Flower', subtitle: 'Small'},
  {id:  3960, title: '4 x 4', subtitle: 'Inverted (Radar)'},
  {id:	 4859, otherIds: [48183], subtitle: ' '},
  {id: 4740},
  {id: 60592},
  {id: 60594},
  {id:  60608, title: 'Pane', subtitle: '1×2×3 w/ Thick Corner Tabs'},
  {id: 60603, imageColor: 86, category: 'Window', title: 'Glass', subtitle: '1×4×3'},
  {id:  85984},
  {id: 60477},
  {id:  3038},
  {id:  3684, subtitle: ' '},
  {id:  64644, titleSize: '14px'},
  // {id:  53451, title: 'Horn', subtitle: 'Small'},
  // {id: 87747, title: 'Horn', subtitle: 'Large'},
  // {id:  13564, imageColor: 88, title: 'Horn', subtitle: 'Cattle'},
  {id:  53451, otherIds: [87747, 13564], title: 'Horns', assorted: true},
  {id: 88646},
  {id: 30374, title: '4L Bar', color: COLOR.transLightBlue, colorTranslucent: true},
  {id: 4495, subtitle: 'Wave'},
  {id: 6126, imageColor: 18, title: 'Wave', subtitle: 'Rounded w/ Base Pins', color: COLOR.transNeonOrange, colorTranslucent: true},
  {id:  2450 },
  {id: 4727, imageColor: 36, color: COLOR.green},
  {id: 'x8', imageColor: 36, imagePath: 'https://img.bricklink.com/ItemImage/EXTN/20693.png', title: 'Stem', subtitle: 'w/ 3 leaves'},
  {id: 87580, subtitle: 'w/ 1 Stud'},
  {id: '3940b', title: '2 x 2 x 2', subtitle: 'Stand w/ Hole'},
  {id: 60481},
  {id: 3941},
  {id: 30165, title: '2 x 2', subtitle: 'Curved Top w/ 2 Studs'},
  {id: 88930, otherIds: [61068], subtitle: ' '},
  {id: 61678},
  {id: 3958},
  {id: 2419},
  {id: 3033},
  {id: 3660},
  {id: 3037},
  {id: 3297},
  {id: '3475b', title: 'Engine', subtitle: 'Small 1×2 Side Plate'},
  {id: 4855 },
  {id: 30194, assorted: true, category: 'Object', title: 'Handheld', titleSize: '14px', subtitle: ' '},
  {id: '6129c02', imageColor: 6, category: 'Animal', title: 'Dragon'},
  {id: '4493c01pb05', imageColor: 88, assorted: true, subtitle: ' '},
  {id: '2547c01', imageColor: 10, assorted: true, subtitle: ' ', title: 'Aquatic'},
  {id: 30478, imageColor: 68, category: 'Animal, Air', title: 'Dino', subtitle: 'Pteranodon'},
  {id: 6064, imageColor: 6, assorted: true, title: 'Plants', subtitle: ''},
  {id: 2582, colorTranslucent: true},
  {id: 2409, imageColor: 18, colorTranslucent: true, titleSize: '14.5px'},
  {id: 2340, title: 'Tail', subtitle: '4×1×3'},
];


const LEGOS5 = [
  {id: 2626},
  {id: 6058, titleSize: '14px'},
  {id: 30000, imageColor: 86},
  {id:  6104},
  {id:  50303, otherIds: [ 2625 ], subtitle: 'Boat Bow Plate'},
  {id: '4738bc01', imageColor: 8, assorted: true, category: 'Object', title: 'Pirate', subtitle: 'Chests, Cannons, Barrels'},
  {id: '4719c01', assorted: true, category: 'Object', title: 'Outdoors', titleSize: '15px', subtitle: 'Lamps, Bicycles, Crates'},
  {id: 30299, imageColor: 10, titleSize: '12px'},
  {id: 2622},
  {id: 30118, imageColor: 9},
  {id: 30119},
  {id: 43093},
  {id: 4871},
  {id: 4854},
  {id: '3943b'},
  {id: 4591},
  {id:  25059, imageColor: 86, assorted: true, title: 'Track', subtitle: 'Roller Coaster'},
  {id: 60623, imageColor: 63, assorted: true, title: 'Doors'},
  {id: 51239, imageColor: 89, color: COLOR.darkPurple},
  {id: 60594, color: COLOR.white},
  {id: 6069, subtitle: 'Triple w/o Notches'},
  {id: 60752, assorted: true, imageColor: 95, title: 'Melee'},
  {id: 87993, assorted: true, imageColor: 66, title: 'Guns'},
  {id: 2446, assorted: true, title: 'Helmets'},
  {id: 30158, imageColor: 8, title: 'Back', subtitle: '& Shoulders', assorted: true, category: 'Object, Apparel'},
  {id: 11253, imageColor: 7, assorted: true, title: 'Footwear', subtitle: ' ', category: 'Object, Apparel', titleSize: '15px'},
  {id: 'bat002', imagePath: 'https://img.bricklink.com/ItemImage/MN/0/bat002.png', category: 'Minifigure', title: 'Minifigs', assorted: true},
  {id: 4151},
  {id: '4285b', subtitle: 'Inverted (Radar) Webbed'},
  {id: 2345},
  {id:  6081 , titleSize: '14px'},
  {id: 37352, imageColor: 7},
  {id: 47457},
  {id:  6215},
  {id: 3300 },
  {id: '3048c', title: '2 x 1', subtitle: 'Triple'},
  {id: 32028 },
  {id: 4510 },
  {id: 2563, imageColor: 8, color: COLOR.brown, title: 'Palm', subtitle: 'Base'},
  {id: '2536b', imagePath: 'https://img.bricklink.com/ItemImage/PN/8/2536a.png', color: COLOR.brown, title: 'Palm', subtitle: 'Trunk'},
  {id: 59349, color: COLOR.white, colorTranslucent: true},
  {id: 30562, color: COLOR.white, colorTranslucent: true},
  {id: 2458 },
  {id: 15706},
  {id: 32018},
  {id: 2730},
  {id: 3703},
  {id: 6541},
  {id:  32000 },
  {id: 4600},
  {id: 30157, imageColor: 86},
  {id:  4488 	},
  {id: 99206 },
  {id: 60476, otherIds: [30241], subtitle: 'w/ Clip'},
  {id: 30237, subtitle: 'w/ Vertical Clip'},
  {id: 6259, color: COLOR.transDarkBlue, colorTranslucent: true},
  {id: 6059, imageColor: 12, color: COLOR.white, colorTranslucent: true, title: '3 x 3 x 6', subtitle: 'Corner Convex w/ Curved Top'},
  {id: 2476},
  {id: 2460, subtitle: 'w / Pin on Top'},
  {id: 2339},
  {id:  30099, color:COLOR.tan},
  {id: 2921 },
  {id: 30236 },
  {id:  36841 , imageColor: 39, subtitle: ' '},
  {id:  36840, subtitle: 'Inverted'},
  {id: 3479},
  {id: 2340},
  {id: '630-3', imagePath: 'https://img.bricklink.com/ItemImage/SN/0/630-3.png', category: 'Utility', title: 'Brick', subtitle: 'Seperator'},
  {id: '44567a', imagePath: 'https://img.bricklink.com/ItemImage/PN/7/44567b.png', category: 'Hinge, Plate', title: '1 x 2', subtitle: '1 Finger Locking'},
  {id: 60471, category: 'Hinge, Plate', title: '1 x 2', subtitle: '2 Fingers Locking'},
  {id: 32002, imageColor: 2, title: '¾ Pin'},
  {id:'4864a', otherIds: [87552], subtitle: ' '},
  {id:  6070, colorTranslucent: true},
  {id: 15392, imageColor: 85, title: 'Trigger', subtitle: 'Projectile Launcher'},
  {id: 48729},
  {id:  85861 },
  {id: 20482},
  {id: 2736, subtitle: 'Axle'},
  {id: 6628, title: 'Tow Ball', subtitle: 'Pin'},
  {id: 30552, color: COLOR.lightBluishGray, title: 'Cylinder', subtitle: '1×2 Locking w/ 1 Finger'},
];

const LEGOS6 = [
  {id: 93273 },
  {id: 3939, color: COLOR.white},
  {id: 6565, category: 'Wedge, Brick'},
  {id: 6564, category: 'Wedge, Brick'},
  {id: 30478, imageColor: 68, category: 'Animal, Air', title: 'Pteranodon', titleSize: '10px'},
  {id: 41539},
  {id:'4864a'},
  {id: 87552, subtitle: ['Hollow Studs', '& Indentation']},
  {id: '2536b', imagePath: 'https://img.bricklink.com/ItemImage/PN/8/2536a.png', color1: COLOR.brown, color2: COLOR.black, title: 'Palm', subtitle: 'Trunk'},
  {id: 6020, subtitle: ['Ladder', 'w/ 2x Clips']},
  {id: 6016, otherIds: 62113},
  {id: 4588},
  {id: '4868a', imageColor: 7, title: 'Engine', subtitle: 'w/ 1×2 Plate'},
  {id: '3403c01', title: '4 x 4', subtitle: 'Turntable w/ Square Base'},
  {id: '2429c01', title:'1 x 4', subtitle: 'Swivel Plate'},
  {id: '44567a', imagePath: 'https://img.bricklink.com/ItemImage/PN/7/44567b.png', title: '1 x 2', subtitle: ['Locking', '1 Finger']},
  {id: 60471, title: '1 x 2', subtitle: ['Locking', '2 Fingers']},
  {id: 4596, subtitle: 'w/ Long Stud Receptacle'},
  {id: 2508, subtitle: ['w/ Long', 'Tow Ball']},
  {id:  4872, imageColor: 13, color1: COLOR.transLightBlue, color2: COLOR.transClear, colorTranslucent: true},
  {id: '3942c'},
  {id: 6039, color2: COLOR.yellow, color1: COLOR.white},
  {id: 2817, imageColor: 156},
  {id: 10247, otherIds: [2444], subtitle: 'w/ Pin Hole'},
  {id: 4732, titleSize: '15px'},
  {id: 4202},
  {id: '3245c', otherIds: '3245b', subtitle: ' '},
  {id: 30565},
  {id: 92438},
  {id: 3456},
  {id: 3001, color: COLOR.black},
  {id: 3010, color: COLOR.black},
  {id: 2465},
  {id:  14716 },
  {id: 22886, imageColor: 69, color1: COLOR.white, color2: COLOR.yellow},
  {id: 30145, color1: COLOR.white, color2: COLOR.lightBluishGray},
  {id: 4733, subtitle: ['w/ Studs on', '4 Sides']},
  {id: 87087, subtitle: ['w/ Studs on', '1 Side']},
  {id:  52031, color: COLOR.black, subtitle: ['Triple', 'Curved']},
  {id: 93604, imageColor: 153, subtitle: ['Triple', 'Curved'], color1: COLOR.red, color2: COLOR.darkRed},
  {id:  6005},
  {id: 6060, color: COLOR.white},
  {id: 48092, color1: COLOR.white, color2: COLOR.darkTurquoise, title: '4×4', subtitle: 'Corner Macaroni Wide'},
  {id: 44728, subtitle: 'by 2×2'},
  {id: 99207, subtitle: 'by 2×2 Inverted'},
  {id: 50950 },
  {id: 11477},
  {id: '3069b'},
  {id: 91988},
  {id: 26603},
  {id:  26047, title: '1 x 1', subtitle: ['Rounded', 'w/ Handle']},
  {id: 30043, color:COLOR.lightBluishGray},
  {id:  27263, title: '2 x 2', subtitle: ['Corner', 'w/ Cutout'], color1: COLOR.white, color2: COLOR.lime},
  {id: 28192, subtitle: ['w/ Cutout', 'w/o Stud'], color1: COLOR.lightBluishGray, color2: COLOR.orange},
  {id: 44301, title: '1 x 2', subtitle: ['Locking', 'w/ 1 Finger'], color: COLOR.lightBluishGray},
  {id: 44302, title: '1 x 2', subtitle: ['Locking', 'w/ 2 Fingers'], color: COLOR.yellow},
  {id: 33291, imageColor: 47, subtitle: ['Flower Edge', 'w/ 4 Petals']},
  {id: 24866, imagePath: 'https://img.bricklink.com/ItemImage/PL/24866.png', subtitle: ['Flower Edge', 'w/ 5 Petals']},
  {id: 2654, title: '2 x 2', subtitle: 'w/ Rounded Bottom', colorTranslucent: true},
  {id: 2654, title: '2 x 2', subtitle: 'w/ Rounded Bottom', colorTranslucent: false},
  {id:  60474},
  {id:  11213},
  {id:  51739},
  {id:  26601},
  {id:  30503, color1: COLOR.lightBluishGray, color2: COLOR.orange},
  {id:  6106, color1: COLOR.darkBluishGray, color2: COLOR.darkTan},
  {id: 11833},
  {id: 30357, title: '3×3', subtitle: 'Corner'},
  {id: 18646, title: '3×6', subtitle: ['Half Circle', 'w/ 1×2 Cutout'], color1: COLOR.darkBluishGray, color2: COLOR.darkTan},
  {id: 22888, title: '4×8', subtitle: ['Half Circle']},
  {id: 35480, title: '1×2', subtitle: ['Rounded', 'w/ Open Studs']},
  {id: 33909},
  {id:  6179},
  {id:  41740},
  {id: 30383, title: '1 x 2', subtitle: ['Locking', 'w/ 1 Finger'], color: COLOR.darkBluishGray},
  {id: 92582, title: '2 x 2', subtitle: ['Locking', 'w/ 1 Finger'], color: COLOR.lightBluishGray},
  {id:  92280, subtitle: ['w/ Clip', 'on Top']},
  {id:  98138},
  {id:  '98138pb023', imagePath: 'https://img.bricklink.com/ItemImage/PN/95/98138pb023.png', assorted: true, category: 'Tile, Round', title: '1 x 1', subtitle: 'Decorated'},
  {id:  18674, subtitle: 'w/ Open Stud'},
];

const LEGOS7 = [
  {id:  4150, otherIds: [14769]},
  {id: '4460b', otherIds: '4460a', subtitle: ' '},
  {id: '3830c01', title: '1 x 4', subtitle: 'Swivel Brick'},
  {id:  98313, otherIds: [98313], title: 'Arm', subtitle: ['Mechanical', 'w/ Clip']},
  {id: '3070b', colorTranslucent: true, subtitle: ' '},
  {id: '3070b', colorTranslucent: false, subtitle: ' '},
  {id: 3939},
  {id:  88292},
  {id:  2571, imageColor: 156, colorTranslucent: true, color: COLOR.transClear},
  {id:  11476, subtitle: ['w/ Clip', 'on Side']},
  {id: 60470, otherIds: ['60470b'], subtitle: 'w/ 2 Clips'},
  {id: '3068b', subtitle: ' '},
  {id:  24201},
  {id:  32803},
  {id: 44301, title: '1 x 2', subtitle: ['Locking', 'w/ 1 Finger']},
  {id: 44302, title: '1 x 2', subtitle: ['Locking', 'w/ 2 Fingers']},
  {id: 54200, colorTranslucent: false},
  {id: 24309, otherIds: [93606], imageList: ['https://img.bricklink.com/ItemImage/PN/157/24309.png', 'https://img.bricklink.com/ItemImage/PN/104/93606.png'], title: '2 x 3', title2: '2×4', titleSize: '16px'},
  {id: 24201, otherIds: [32803], imageList: [24201, 32803], title: '2 x 1', title2: '2×2', titleSize: '16px', subtitle: 'Inverted'},
  {id:  61409},
  {id:  30413},
  {id:  15535 	},
  {id: '2431pb243', imagePath: 'https://img.bricklink.com/ItemImage/PN/88/2431pb243.png', title: '1 x 4', subtitle: ['Wood Grain', 'w/ 4 Nails']},
  {id: '63864pb049', imagePath: 'https://img.bricklink.com/ItemImage/PN/69/63864pb049.png', title: '1 x 3', subtitle: ['Wood Grain', 'w/ 4 Nails']},
  {id:  88930, subtitle: ' '},
  {id: 6191},
  {id: '2348b', imagePath: 'https://img.bricklink.com/ItemImage/PN/14/2348b.png', title: '4 x 4', subtitle: ['for Hinge', 'w/ Ridges']},
  {id: 60603, imageColor: 86, title: '1×4×3', subtitle: 'Opening'},
  {id: 87544, subtitle: ['Hollow Studs', '& Indentation']},
  {id: '2362b'},
  {id: '2352b', imageColor: 3},
  {id: 2437},
  {id:  3823, imageColor: 14},
  {id: 15470, imageColor: 95},
  {id: '4592', otherIds: ['4593'], imageList: [4592, 4593], title: 'Lever', subtitle: 'Base and Handle'},
  {id: '4592c02',  title: 'Lever', subtitle: 'Small Base'},
  {id: 3822, otherIds: [3821], imageList: [3821, 3822], subtitle: ['Left & Right']},
  {id: 15469, imageColor: 156, color: COLOR.mediumAzure},
  {id: '4495a', otherIds: ['4495b'], imageList: ['https://img.bricklink.com/ItemImage/PN/9/4495a.png', '4495b'], subtitle: ['Waving','Flag']},
  {id: '4727', otherIds: ['4728'], imageList: ['https://img.bricklink.com/ItemImage/PN/6/4727.png', 'https://img.bricklink.com/ItemImage/PN/3/4728.png'], subtitle: 'Blocky Style'},
  {id: 32607, imageColor:6, title: '1 x 1 with 3 Leaves'},
  {id: 32606, imageColor: 47, category: 'Plant', title: 'Flower', subtitle: ['w/ 7 Petals', 'and Pin'], color: COLOR.darkPink},
  {id:  51239, imageColor: 89, color: COLOR.darkPurple},
  {id: 60593, color: COLOR.reddishBrown},
  {id: 6154},
  {id: 30055, otherIds: [15332], imageList: [15332,30055], title: '1 x 4 x 2', subtitle: 'Spindled'},
  {id: 2850, imageColor: 9, assorted: true, category: 'Vehicle', title: 'Car Parts', titleSize: '15px'},
  {id: 4345, otherIds: 4346, imageList: [4345, 4346], title: '2 x 2 x 2', subtitle: ['Box & Door', 'w/ Slots']},
  {id: 64644, category: 'Object, Handheld', titleSize: '13px'},
  {id: '18829pb01', imageColor: 2, assorted: true, title: 'Long', subtitle: 'Hair'},
  {id: '53982', imageColor: 5, assorted: true, title: 'Short', subtitle: 'Hair'},
  {id: '970c00', assorted: true, color: COLOR.lightBluishGray, title: 'Legs'},
  {id:  6231 },
  {id:  93095, subtitle: 'w/ Center Divider'},
  {id: 43888, imageColor: 68},
  {id:  2641, imageColor: 9, color: COLOR.yellow, title: 'Crane', subtitle: 'Leg'},
  {id: 87617, subtitle: 'w/ Handle', color: COLOR.red},
  {id: 30374, title: '4L Bar'},
  {id: '973pb1062c01', imageColor: 63, assorted: true, title: 'Historic', subtitle: 'Torso'},
  {id: '973pb2227c01', imageColor: 1, assorted: true, title: 'Futuristic', subtitle: 'Torso'},
  {id: 73092, assorted: true, category: 'Hinge', title: 'Magnetic', titleSize: '14px'},
  {id: '3937c02', imageColor: 7, title: '2 x 2', subtitle: ['Brick', 'w / 1×2 Top']},
  {id: 61506, imageColor: 69, title: 'Historic', subtitle: 'Headwear', assorted: true},
  {id: '93219pb05', imageColor: 86, title: 'Modern', subtitle: 'Headwear', assorted: true},
  {id: 2446, assorted: true, title: 'Helmet'},
  {id: '970d09', imageColor: 11, assorted: true, title: 'Modified', subtitle: 'Legs & Dresses'},
  {id: '970c69pb07', imageColor:120, assorted: true, title: 'Printed', subtitle: 'Legs'},
  {id: 3004, color2: COLOR.red, color1: COLOR.blue},
  {id: 3004, color1: COLOR.lightBluishGray, color2: COLOR.black},
  {id: 6126, otherIds: '85959px1', imageList: ['https://img.bricklink.com/ItemImage/PN/18/6126.png', 'https://img.bricklink.com/ItemImage/PN/51/85959pb03.png'], imageColor: 18, title: 'Flame'},
  {id:  3705, title: '4L', isTitleNumeric: true},
  {id:  3706, title: '6L', isTitleNumeric: true},
];