var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacle1,obstacle2; // C41//SA
var cars = [];
var blastImage;                   //C42// SA

function preload() {
  backgroundImage = loadImage("bg.png");
  car1_img = loadImage("/her.png");
  car2_img = loadImage("1.png");
 track = loadImage("track.jpg");
 fuelImage = loadImage("fuel.png");
 powerCoinImage = loadImage("goldCoin.png");
  lifeImage = loadImage("life.png");
  obstacle1Image = loadImage("red.png"); // C41//SA
  obstacle2Image = loadImage("red.png"); // C41//SA
  blastImage = loadImage("blast.png"); //C42 //SA
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
