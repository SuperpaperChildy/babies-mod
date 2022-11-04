import { getLastEnumValue, validateEnumContiguous } from "isaacscript-common";

export enum RandomBabyType {
  SPIDER = 0,
  LOVE = 1,
  BLOAT = 2,
  WATER = 3,
  PSY = 4,
  CURSED = 5,
  TROLL = 6,
  YBAB = 7,
  COCKEYED = 8,
  HOST = 9,
  LOST = 10,
  CUTE = 11,
  CROW = 12,
  SHADOW = 13,
  GLASS = 14,
  GOLD = 15,
  CY = 16,
  BEAN = 17,
  MAG = 18,
  WRATH = 19,
  WRAPPED = 20,
  BEGOTTEN = 21,
  DEAD = 22,
  FIGHTING = 23,

  /** For "-0- Baby" */
  ZERO = 24,

  GLITCH = 25,
  MAGNET = 26,
  BLACK = 27,
  RED = 28,
  WHITE = 29,
  BLUE = 30,
  RAGE = 31,
  CRY = 32,
  YELLOW = 33,
  LONG = 34,
  GREEN = 35,
  LIL = 36,
  BIG = 37,
  BROWN = 38,
  NOOSE = 39,
  HIVE = 40,
  BUDDY = 41,
  COLORFUL = 42,
  WHORE = 43,
  CRACKED = 44,
  DRIPPING = 45,
  BLINDING = 46,
  SUCKY = 47,
  DARK = 48,
  PICKY = 49,
  REVENGE = 50,
  BELIAL = 51,
  SALE = 52,
  GOAT_HEAD = 53,
  SUPER_GREED = 54,
  MORT = 55,
  APOLLYON = 56,
  BONE = 57,
  BOUND = 58,
  BIG_EYES = 59,
  SLEEP = 60,
  ZOMBIE = 61,
  GOAT = 62,
  BUTTHOLE = 63,
  EYE_PATCH = 64,
  BLOOD_EYES = 65,
  MUSTACHE = 66,
  SPITTLE = 67,
  BRIAN = 68,
  THREE_EYES = 69,
  VIRIDIAN = 70,
  BLOCKHEAD = 71,
  WORM = 72,
  LOWFACE = 73,
  ALIEN_HOMINID = 74,
  BOMB = 75,
  VIDEO = 76,
  PARASITE = 77,
  DERP = 78,
  LOBOTOMY = 79,
  CHOKE = 80,
  SCREAM = 81,
  GURDY = 82,
  GHOUL = 83,
  GOATEE = 84,
  SHADES = 85,
  STATUE = 86,
  BLOODSUCKER = 87,
  BANDAID = 88,
  EYEBROWS = 89,
  NERD = 90,
  BOSS = 91,
  TURD = 92,
  O = 93,
  SQUARE_EYES = 94,
  TEETH = 95,
  FROWN = 96,
  TONGUE = 97,
  HALF_HEAD = 98,
  MAKEUP = 99,
  ED = 100,
  D = 101,
  GUPPY = 102,
  PUKE = 103,
  DUMB = 104,
  LIPSTICK = 105,
  AETHER = 106,
  BROWNIE = 107,
  VVVVVV = 108,
  NOSFERATU = 109,
  PUBIC = 110,
  EYEMOUTH = 111,
  WEIRDO = 112,
  V = 113,
  STRANGE_MOUTH = 114,
  MASKED = 115,
  CYBER = 116,
  AXE_WOUND = 117,
  STATUE_2 = 118,
  GRIN = 119,
  UPSET = 120,
  PLASTIC = 121,
  MONOCHROME = 122,
  ONE_TOOTH = 123,
  TUSKS = 124,
  HOPELESS = 125,
  BIG_MOUTH = 126,
  PEE_EYES = 127,
  EARWIG = 128,
  NINKUMPOOP = 129,
  STRANGE_SHAPE = 130,
  BUGEYED = 131,
  FREAKY = 132,
  CROOKED = 133,
  SPIDER_LEGS = 134,
  SMILING = 135,
  TEARS = 136,
  BOWLING = 137,
  MOHAWK = 138,
  ROTTEN_MEAT = 139,
  NO_ARMS = 140,
  TWIN = 141,
  UGLY_GIRL = 142,
  CHOMPERS = 143,
  CAMILLO_JR = 144,
  EYELESS = 145,
  SLOPPY = 146,
  BLUEBIRD = 147,
  FAT = 148,
  BUTTERFLY = 149,
  GOGGLES = 150,
  APATHETIC = 151,
  CAPE = 152,
  SORROW = 153,
  RICTUS = 154,
  AWAKEN = 155,
  PUFF = 156,
  ATTRACTIVE = 157,
  PRETTY = 158,
  CRACKED_INFAMY = 159,
  DISTENDED = 160,
  MEAN = 161,
  DIGITAL = 162,
  HELMET = 163,
  BLACK_EYE = 164,
  LIGHTS = 165,
  SPIKE = 166,
  WORRY = 167,
  EARS = 168,
  FUNERAL = 169,
  LIBRA = 170,
  GAPPY = 171,
  SUNBURN = 172,
  ATE_POOP = 173,
  ELECTRIC = 174,
  BLOOD_HOLE = 175,
  TRANSFORMING = 176,
  ABAN = 177,
  BANDAGE_GIRL = 178,
  PIECE_A = 179,
  PIECE_B = 180,
  SPELUNKER = 181,
  FROG = 182,
  CROOK = 183,
  DON = 184,
  WEB = 185,
  FADED = 186,
  SICK = 187,
  DR_FETUS = 188,
  SPECTRAL = 189,
  RED_SKELETON = 190,
  SKELETON = 191,
  JAMMIES = 192,
  NEW_JAMMIES = 193,
  COLD = 194,
  OLD_MAN = 195,
  SPOOKED = 196,
  NICE = 197,
  DOTS = 198,
  PEELING = 199,
  SMALL_FACE = 200,
  GOOD = 201,
  BLINDFOLD = 202,
  PIPE = 203,
  DENTED = 204,
  STEVEN = 205,
  MONOCLE = 206,
  BELIAL_2 = 207,
  MONSTRO = 208,
  FEZ = 209,
  MEATBOY = 210,
  SKULL = 211,
  CONJOINED = 212,
  SKINNY = 213,
  BASIC_SPIDER = 214,
  SHOPKEEPER = 215,
  FANCY = 216,
  CHUBBY = 217,
  CYCLOPS = 218,
  ISAAC = 219,
  PLUG = 220,
  DROOL = 221,
  WINK = 222,
  POX = 223,
  ONION = 224,
  ZIPPER = 225,
  BUCKTEETH = 226,
  BEARD = 227,
  HANGER = 228,
  VAMPIRE = 229,
  TILT = 230,
  BAWL = 231,
  LEMON = 232,
  PUNKBOY = 233,
  PUNKGIRL = 234,
  COMPUTER = 235,
  MASK = 236,
  GEM = 237,
  SHARK = 238,
  BERET = 239,
  BLISTERS = 240,
  RADIOACTIVE = 241,
  BEAST = 242,
  DARK_2 = 243,
  SNAIL = 244,
  BLOOD = 245,
  EIGHT_BALL = 246,
  WISP = 247,
  CACTUS = 248,
  LOVE_EYE = 249,
  MEDUSA = 250,
  NUCLEAR = 251,
  PURPLE = 252,
  WIZARD = 253,
  EARTH = 254,
  SATURN = 255,
  CLOUD = 256,
  TUBE = 257,
  ROCKER = 258,
  KING = 259,
  COAT = 260,
  VIKING = 261,
  PANDA = 262,
  RACCOON = 263,
  BEAR = 264,
  POLAR_BEAR = 265,
  LOVEBEAR = 266,
  HARE = 267,
  SQUIRREL = 268,
  TABBY = 269,
  PORCUPINE = 270,
  PUPPY = 271,
  PARROT = 272,
  CHAMELEON = 273,
  BOULDER = 274,
  AQUA = 275,
  GARGOYLE = 276,
  SPIKY_DEMON = 277,
  RED_DEMON = 278,
  ORANGE_DEMON = 279,
  EYE_DEMON = 280,
  FANG_DEMON = 281,
  GHOST_2 = 282,
  ARACHNID = 283,
  BONY = 284,
  BIG_TONGUE = 285,
  THREE_D = 286,
  SUIT = 287,
  BUTT = 288,
  CUPID = 289,
  HEART = 290,
  KILLER = 291,
  LANTERN = 292,
  BANSHEE = 293,
  RANGER = 294,
  RIDER = 295,
  CHOCO = 296,
  WOODSMAN = 297,
  BRUNETTE = 298,
  BLONDE = 299,
  BLUE_HAIR = 300,
  BLOODIED = 301,
  CHEESE = 302,
  PIZZA = 303,
  HOTDOG = 304,
  NATURE = 305,
  BORG = 306,
  CORRUPTED = 307,
  X_MOUTH = 308,
  X_EYED = 309,
  STARRY_EYED = 310,
  SURGEON = 311,
  SWORD = 312,
  MONK = 313,
  DISCO = 314,
  PUZZLE = 315,
  SPEAKER = 316,
  SCARY = 317,
  FIREBALL = 318,
  MAW = 319,
  EXPLODING = 320,
  CUPCAKE = 321,
  SKINLESS = 322,
  BALLERINA = 323,
  GOBLIN = 324,
  COOL_GOBLIN = 325,
  GEEK = 326,
  LONG_BEARD = 327,
  MUTTONCHOPS = 328,
  SPARTAN = 329,
  TORTOISE = 330,
  SLICER = 331,
  BUTTERFLY_2 = 332,
  HOMELESS = 333,
  LUMBERJACK = 334,
  CYBERSPACE = 335,
  HERO = 336,
  BOXERS = 337,
  WING_HELMET = 338,
  X = 339,
  O_2 = 340,
  VOMIT = 341,
  MERMAN = 342,
  CYBORG = 343,
  BARBARIAN = 344,
  LOCUST = 345,
  TWOTONE = 346,
  N_2600 = 347,
  FOURTONE = 348,
  GRAYSCALE = 349,
  RABBIT = 350,
  MOUSE = 351,
  CRITTER = 352,
  BLUE_ROBOT = 353,
  PILOT = 354,
  RED_PLUMBER = 355,
  GREEN_PLUMBER = 356,
  YELLOW_PLUMBER = 357,
  PURPLE_PLUMBER = 358,
  TANOOKI = 359,
  MUSHROOM_MAN = 360,
  MUSHROOM_GIRL = 361,
  CANNONBALL = 362,
  FROGGY = 363,
  TURTLE_DRAGON = 364,
  SHELL_SUIT = 365,
  FIERY = 366,
  MEAN_MUSHROOM = 367,
  ARCADE = 368,
  SCARED_GHOST = 369,
  BLUE_GHOST = 370,
  RED_GHOST = 371,
  PINK_GHOST = 372,
  ORANGE_GHOST = 373,
  PINK_PRINCESS = 374,
  YELLOW_PRINCESS = 375,
  DINO = 376,
  ELF = 377,
  DARK_ELF = 378,
  DARK_KNIGHT = 379,
  OCTOPUS = 380,
  ORANGE_PIG = 381,
  BLUE_PIG = 382,
  ELF_PRINCESS = 383,
  FISHMAN = 384,
  FAIRYMAN = 385,
  IMP = 386,
  WORM_2 = 387,
  BLUE_WRESTLER = 388,
  RED_WRESTLER = 389,
  TOAST = 390,
  ROBOBOY = 391,
  LIBERTY = 392,
  DREAM_KNIGHT = 393,
  COWBOY = 394,
  MERMAID = 395,
  PLAGUE = 396,
  SPACE_SOLDIER = 397,
  DARK_SPACE_SOLDIER = 398,
  GAS_MASK = 399,
  TOMBOY = 400,
  CORGI = 401,
  UNICORN = 402,
  PIXIE = 403,
  REFEREE = 404,
  DEAL_WITH_IT = 405,
  ASTRONAUT = 406,
  BLURRED = 407,
  CENSORED = 408,
  COOL_GHOST = 409,
  GILLS = 410,
  BLUE_HAT = 411,
  CATSUIT = 412,
  PIRATE = 413,
  SUPER_ROBO = 414,
  LIGHTMAGE = 415,
  PUNCHER = 416,
  HOLY_KNIGHT = 417,
  SHADOWMAGE = 418,
  FIREMAGE = 419,
  PRIEST = 420,
  ZIPPER_2 = 421,
  BAG = 422,
  SAILOR = 423,
  RICH = 424,
  TOGA = 425,
  KNIGHT = 426,
  BLACK_KNIGHT = 427,
  MAGIC_CAT = 428,
  LITTLE_HORN = 429,
  FOLDER = 430,
  DRIVER = 431,
  DRAGON = 432,
  DOWNWELL = 433,
  CYLINDER = 434,
  CUP = 435,
  CAVE_ROBOT = 436,
  BREADMEAT_HOODIEBREAD = 437,
  BIG_MOUTH_2 = 438,
  AFRO_RAINBOW = 439,
  AFRO = 440,
  TV = 441,
  TOOTH_HEAD = 442,
  TIRED = 443,
  STEROIDS = 444,
  SOAP_MONSTER = 445,
  ROJEN_WHITEFOX = 446,
  ROCKET = 447,
  NURF = 448,
  MUTATED_FISH = 449,
  MOTH = 450,
  BUTTFACE = 451,
  FLYING_CANDLE = 452,
  GRAVEN = 453,
  GIZZY_CHARGESHOT = 454,
  GREEN_KOOPA = 455,
  HANDSOME_MR_FROG = 456,
  PUMPKIN_GUY = 457,
  RED_KOOPA = 458,
  SAD_BUNNY = 459,
  SATURN_2 = 460,
  TOAST_BOY = 461,
  VOXDOG = 462,
  N_404 = 463,
  ARROWHEAD = 464,
  BEANIE = 465,
  BLINDCURSED = 466,
  BURNING = 467,
  CURSOR = 468,
  FLY = 469,
  HEADPHONE = 470,
  KNIFE = 471,
  MUFFLERSCARF = 472,
  ROBBERMASK = 473,
  SCOREBOARD = 474,
  SO_MANY_EYES = 475,
  TEXT = 476,
  WING = 477,
  TOOTH = 478,
  HAUNT = 479,
  IMP_2 = 480,
  N_32_BIT = 481,
  ADVENTURE = 482,
  BUBBLES = 483,
  BULB = 484,
  COOL_ORANGE = 485,
  CRAZY_GHOST = 486,
  CURSED_PILLOW = 487,
  EGG = 488,
  FACTORY = 489,

  /**
   * There are two sprites with the prefix of "490_" and this is the first one, so it gets the
   * number of 490.
   */
  ERSATZ = 490,

  FUNNY = 491,
  GAMER = 492,
  GLITTERY_PEACH = 493,
  POMPADOUR = 494,
  HEAD_KICK = 495,
  HORN = 496,
  ICHOR = 497,
  ILL = 498,
  LAZY = 499,
  MERN = 500,
  NECRO = 501,
  PEEPING = 502,
  PENANCE = 503,
  PSYCHIC = 504,
  PUPPET = 505,
  REAPER = 506,
  ROAD_KILL = 507,
  SAUSAGE_LOVER = 508,
  SCRIBBLE = 509,
  STAR_PLANT = 510,
  TWITCHY = 511,
  WITCH = 512,
  WORKSHOP = 513,
  HOOLIGAN = 514,
  HALF_SPIDER = 515,
  SILLY = 516,
  MASTER_COOK = 517,
  GREEN_PEPPER = 518,
  BAGGY_CAP = 519,
  STYLISH = 520,

  /** Has a sprite number of 59. */
  FOUND_SOUL = 521,

  /** Has a sprite number of 60. */
  LOST_WHITE = 522,

  /** Has a sprite number of 61. */
  LOST_BLACK = 523,

  /** Has a sprite number of 62. */
  LOST_BLUE = 524,

  /** Has a sprite number of 63. */
  LOST_GREY = 525,

  /** Has a sprite number of 64. */
  WISP_2 = 526,

  /** Has a sprite number of 65. */
  DOUBLE = 527,

  /** Has a sprite number of 66. */
  GLOWING = 528,

  /** Has a sprite number of 67. */
  ILLUSION = 529,

  /** Has a sprite number of 68. */
  HOPE = 530,

  /** Has a sprite number of 69. */
  SOLOMONS_A = 531,

  /** Has a sprite number of 70. */
  SOLOMONS_B = 532,

  THIRTEENTH = 533,
  BERRY = 534,
  EYEBAT = 535,
  BABY_IS_YOU = 536,
  VESSEL = 537,
  ROCK = 538,
  JANITOR = 539,
  MEATY = 540,
  PIG = 541,
  PEGASUS = 542,
  MR_E = 543,
  SLAB = 544,
  POG = 545,
  HIVE_KING = 546,
  PILL_SHIP = 547,
  POINT = 548,
  WYRM = 549,
  BULLET = 550,
  PURPLE_HORSE = 551,
  KOALA = 552,
  CLIFF_HANGER = 553,
  PENGUIN = 554,
  KINDA_LOVABLE = 555,
  CURSED_ROOM = 556,
  PROTO = 557,
  FINGER = 558,
  BALD = 559,
  HEX = 560,
  SINGING = 561,
  JUNK = 562,

  /**
   * There are two sprites with the prefix of "490_" and this is the second one, so we assign it at
   * the end.
   */
  FALLING = 563,

  // Familiar babies are ordered by `CollectibleType`.
  BROTHER_BOBBY = 564,
  SISTER_MAGGY = 565,
  ROBO = 566,
  LITTLE_GISH = 567,
  LITTLE_STEVEN = 568,
  DEMON = 569,
  GHOST = 570,
  HARLEQUIN = 571,
  RAINBOW = 572,
  ABEL = 573,
  ROBO_2 = 574,
  ROTTEN = 575,
  LIL_BRIMSTONE = 576,
  MONGO = 577,
  INCUBUS = 578,
  FATES_REWARD = 579,
  SERAPHIM = 580,
  LIL_LOKI = 581,
  LIL_MONSTRO = 582,
  BOILED = 583,
  FREEZER = 584,
  LIL_ABADDON = 585,
  TWISTED = 586,
  GELLO = 587,

  // Other
  ESAU_JR = 588,
  SIREN_SHOOTER = 589,
  INVISIBLE = 590,
}

export const MAX_BABY_TYPE = getLastEnumValue(RandomBabyType);

validateEnumContiguous("RandomBabyType", RandomBabyType);
