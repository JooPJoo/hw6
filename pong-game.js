/*https://editor.p5js.org/popomojo/sketches/xd9_9-pcX*/

function preload() 
  {
  soundFormats("wav", "mp3");
    ballBounce = loadSound("ball hit.wav");
    missedDie = loadSound("miss die.wav");
    backMusic = loadSound("background music.mp3");
  }

var ballBounce
var missedDie
var backMusic

var playerL = 100;
var playerR = 100;

var ballX = 300;
var ballY = 200;

var fr = 60;
var musicRate = 1;

//object

var ball = 
    {
      x: 300,
      y: 200,
      xspeed: 1.5,
      yspeed: 1.5,
    };


function setup() {
  createCanvas(600, 400);
  
  backMusic.loop();
  backMusic.setVolume(0.25);
  
  frameRate(fr);
}

function draw() {
  background(0);
  
  
  //ORDER WHERE YOU DRAW MATTERS!!
  //center line
  line(width/2, 0, width/2, height);
  stroke(255);
  
  //puck
  ellipse(ball.x, ball.y, 20)  //calls the object 'ball'
  
  //left player
  rect(0, playerL, 15, 100);
  
  //right player
  rect(width-15, playerR, 15, 100);
  
  if (keyIsDown(UP_ARROW)) 
  {
    playerR -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    playerR += 10
  }
  
  if (keyIsDown(65) || keyIsDown(87)) //ASCII values of A or W
  {
    playerL -= 10;
  }
  
  if (keyIsDown(90) || keyIsDown(83)) //ASCII value of S or Z
  {
    playerL += 10
  }
  
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
  
  if (ball.y < 0)
  {
    ball.y = 0;
    ball.yspeed *= -1;
  }
  
  /*if (ball.x < 0)        //new code after class
  {
    ball.x = 0;
    ball.xspeed *= -1;
  }*/
  
  if (ball.y > height)
  {
    ball.y = height;
    ball.yspeed *= -1;
  }
  
  if (ball.x > width)
  {
    backMusic.stop();
    missedDie.play();
    textSize(25);
    fill(255)
    text ('Player Left Wins!!', 75, 200);
    noLoop();
  }
  
  if (ball.x > width - 15 && ball.y >= playerR && ball.y <= playerR + 100)
  {
    ballBounce.play();
    ball.xspeed *= (-1)*1.2;
    fr += 60;
    
    backMusic.rate(musicRate);
    musicRate += 0.05
  }
  
  if (ball.x < 0)
  {
    backMusic.stop();
    missedDie.play();
    textSize(25);
    fill(255);
    text ('Player Right Wins!!', 325, 200);
    noLoop();
  }
  
  if (ball.x < width - 585 && ball.y >= playerL && ball.y <= playerL + 100)
  {
    ballBounce.play();
    ball.xspeed *= (-1)*1.2;
    fr +=60;
    //var mr = map(fr, 60, 240, 1, 2);
    //backMusic.rate(mr);
    
    backMusic.rate(musicRate);
    musicRate += 0.05
  }
}
