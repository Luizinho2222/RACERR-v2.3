var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;

//spdm 1 e 2 são imagens, spdm é o sprite 
var spdm1,spdm2,spdm;



var cars = [];

function preload() {
  backgroundImage = loadImage("bg.png");
  car1_img = loadImage("FerrariCalifornia.png");
  car2_img = loadImage("AcuraSuv.png");
  track = loadImage("track.jpg");
  spdm1 = loadImage("spdm1.png")
  spdm2 = loadImage("spdm2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight + 800);
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

  spdm = createSprite(200,200);
  spdm.addImage(spdm1);


  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
