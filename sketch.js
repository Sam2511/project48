var player;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10;
var enemyLaserG;
var heroLaserG;
var enemyImg, heroImg, bgImg, bossImg;
var spaceImg;
var enemyG;
var noLevel = 1;
var level;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var flag6 = 0;
var gameState = "play";
var edges;
var boss;
var playerHit;
var playerDestroy;
var enemyDestroy;
var enemyShoot;
var winningSong;
var HeroHit;
var lev2Ig;
var lev3Ig;
var las1,las2;
var level1BackMu;
var level2BackMu;
var level3BackMu;

function preload(){
 enemyImg = loadImage("Images/Enemy.png");
 heroImg = loadImage("Images/Hero.png");
 spaceImg = loadImage("Images/Space.jpg");
 lev2Ig = loadImage("Images/Level2.jpg");
 lev3Ig = loadImage("Images/Level3.jpg");
 bossImg = loadImage("Images/Boss.png");
 playerHit = loadSound("Sounds/PlayerHit.mp3");
 playerDestroy = loadSound("Sounds/PlayerDestroyed.mp3");
 enemyDestroy = loadSound("Sounds/EnemyDestroyed.mp3");
 enemyShoot = loadSound("Sounds/EnemyShootingNoise.wav");
 winningSong = loadSound("Sounds/Pokémon _ Season 19 - XY And Z.mp3");
 HeroHit = loadSound("Sounds/HeroHit.mp3");
 level1BackMu = loadSound("Sounds/DreamSpeedrunMusic.mp3");
 level2BackMu = loadSound("Sounds/pigstep.mp3");
 level3BackMu = loadSound("Sounds/PiratesofCarribean.mp3")
}

function setup() {
  createCanvas(1255,555);
  
  enemyG = new Group();
  level  = new Level();

  edges = createEdgeSprites();

  enemyLaserG = new Group();
  heroLaserG = new Group();

  
  
    if(noLevel === 1){ 
    level.level1Setup();
   }
/*   else if(noLevel === 2){
    level.level2Setup();
  }
  else if(noLevel === 3){
    level.level3Setup();}

 */
}

function draw() {
  background(0);
  textSize(20);  
  fill("Green");
  text("Use arrow keys to move and space bar to shoot",200,25);

 /* if(noLevel === 3 && gameState === "win"){
    if(keyDown("r")){
      noLevel = 1;
    }
  }*/
  /*if(noLevel === 2){
    player.health = 40;
  }*/
  
  //console.log("flag of 2: " + flag2);
  if(noLevel === 1){ 
    level.level1Draw();
   }
  else if(noLevel === 2){
    if(flag2 === 0){
      level.level2Setup();
      flag2 = 1;
    }
    level.level2Draw();
  }
  else if(noLevel === 3){
    if(flag3 === 0){
      level.level3Setup();
      flag3 = 1;
    }
    level.level3Draw();
  }
  

 

  drawSprites();
}