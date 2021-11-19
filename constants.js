export const GAMES_ENUM = ["FirstGame", "SecondGame", "ThirdGame"];

export const GAMES_DESCIPTIONS = [
  {
    setting:
      "You enter the game room, where many participants have already gathered. How many are there? Twenty? Thirty? More? You'd better take a look around to understand who is the friend and who is the enemy...",
    description:
      "Peripheral vision development - Schulte table. Your task is to press all the numbers from a sequence from 1 to N (or letters from A to Y) in the valid order, before the time is up. The quicker you are - the more points you get.",
    rules: [
      "You will loose if you run out of time",
      "You are allowed to make 2 mistakes and will loose on the 3rd one",
      "Mistakes count affects the amount of points you will win. Same for the time you'll have left at the end",
      "You win when all the tiles are pressed in the valid order",
    ],
  },
  {
    setting:
      "In the new game you were given two boxes of dalgon cookies. Seems you've got the simple drawings, just need to cut them out before the time runs out...",
    description:
      "brain hemispheres connection development. You need to outline the drawings in front of you with both hands as quickly as possible.",
    rules: [
      "You will loose if you run out of time",
      "The screen is divided into two drawing fields, where templates of what needs to be outlined are shown on both sides",
      "You need to draw with both hands at the same time",
      "To begin the game - tap on the both cookies simultaneously",
      "You will loose if you try to draw with one hand only for more than 0.5 seconds",
      "Press the 'Done' button as soon as you finish your drawings. Remember to remove the fingers simultaneously",
      "Your score depends on how fast you'll finish and how precise your drawings are",
      "You will loose if your drawings are not precise enough",
    ],
  },
  {
    setting:
      "Only few players made it to the last game. Now you stand in front of a glass bridge you need to walk through. The bridge floor is build of strong and fragile tiles. If you're attentive enough, you can guess the stronger tile by it's color and walk further. It only remains to believe in your luck...",
    description:
      "color shade determination. You must choose the most suitable color from a given set, which will match the color on the main board.",
    rules: [
      "You will loose if you run out of time",
      "The valid color will be displayed on the main board",
      "Down below of it - a color set to choose from",
      "You need to guess the valid color N times to win",
      "You are allowed to make 2 mistakes and will loose on the 3rd one",
      "Mistakes count affects the amount of points you will win. Same for the time you'll have left at the end",
    ],
  },
];

export const tableGame = [
  {
    GAME_TIME_MS: 5000,
    SQUARE_SIZE: 3,
    LETTERS_MODE: false,
  },
  {
    GAME_TIME_MS: 15000,
    SQUARE_SIZE: 5,
    LETTERS_MODE: false,
  },
  {
    GAME_TIME_MS: 20000,
    SQUARE_SIZE: 5,
    LETTERS_MODE: true,
  },
];

export const drawGame = [
  {
    GAME_TIME_MS: 20000,
    IMAGES: ["circle", "D", "elipse", "rectangle", "triangle", "8", "U"],
  },
  {
    GAME_TIME_MS: 30000,
    IMAGES: ["S", "8", "teardrop", "P", "U", "rectangle", "6"],
  },
  {
    GAME_TIME_MS: 60000,
    IMAGES: ["star", "heart", "teardrop", "N", "G", "triangle", "8"],
  },
];

export const colorsGame = [
  {
    GAME_TIME_MS: 10000,
    SQUARE_SIZE: 3,
    COLOR_BIAS: 128,
    COLORS_COUNT: 10,
  },
  {
    GAME_TIME_MS: 10000,
    SQUARE_SIZE: 3,
    COLOR_BIAS: 64,
    COLORS_COUNT: 5,
  },
  {
    GAME_TIME_MS: 10000,
    SQUARE_SIZE: 3,
    COLOR_BIAS: 32,
    COLORS_COUNT: 3,
  },
];
