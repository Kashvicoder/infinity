var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4;
var cars; 
var car1Img, car2Img, car3Img, car4Img;
var track,ground,lastbg;

function preload(){
  var car1Img = loadImage("images/car1.png");
  var car2Img = loadImage("images/car2.png");
  var car3Img = loadImage("images/car3.png");
  var car4Img = loadImage("images/car4.png");
  var ground = loadImage("images/ground.png");
  var track = loadImage("images/track.jpg");
  var lastBG = loadImage("images/lastBG.jpg");

}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
