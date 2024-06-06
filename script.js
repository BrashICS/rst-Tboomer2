console.log("Script loaded...")
// setting up variables
let badguys = []
let keyIndex = -1;
let i = 0
let game = true
let points = 0
let level = 1
let player
let speedup=false

class default_player {
  x;
  y;
  firerate;
  health;
  speed;
  constructor(x,y,firerate,health,speed){
    this.x=x;
    this.y=y;
    this.firerate = firerate;
    this.health=health;
    this.speed=speed;
  }
  }
// setingup the page does not do much
function setup(){
  createCanvas(windowWidth,windowHeight-5);
  background(255,0,0);
  console.log(badguys)
  badguys.push(new bad_guy(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()* windowHeight+1)))
  player= new default_player(windowWidth/2,windowHeight/2,10,10,1)
console.log(player.speed)
}
// the class for the main enemy
class bad_guy {
  x;
  y;

  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

// Math.floor(Math.random()* windowWidth+1)
// Math.floor(Math.random()* windowHeight+1)
// gives you the ability to shoot the gun does not do much yet

function mouseClicked() {
  i++
  speedStartStop()
  console.log("Bang Bang")
  circle(mouseX , mouseY ,2);
  //badguys.push(new bad_guy(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()* windowHeight+1)))
  console.log(badguys)
  for (let l=0;l<badguys.length;l++){
    if (badguys[l].x<mouseX+15&&badguys[l].x>mouseX-15){
      if (badguys[l].y<mouseY+15&&badguys[l].y>mouseY-15){
        badguys.splice(l,1)
        points++
        return
    }
  }
}
}

function getdistance(u,o,p,l){
  return(Math.sqrt(Math.pow((u-p),2)))+(Math.sqrt(Math.pow((o-l),2)))
}

// IMPORTANT FUNCTION
// this is how all the enemys move about
function moveBadGuy(){
  for (let i=0;i<badguys.length;i++){
    if (badguys[i].x<player.x+10&&badguys[i].x>player.x-10){ //its intentional that the zombie has to be on top of the player befor the player dies as any other way felt unfair for the player
      if (badguys[i].y<player.y+ 10&&badguys[i].y>player.y-10){
        console.log("DIE DIE DIE")
        game = false
        return false
    }
  }
    newX = badguys[i].x+((Math.random()* 4)-2)// makes zombies jitter on the x axis
    newY= badguys[i].y+((Math.random()* 4)-2)// makes zombies jitter on the y axis
    while (getdistance(newX,newY,player.x,player.y)>getdistance(badguys[i].x,badguys[i].y,player.x,player.y)){ //See the distance bettwen the player and zombies
      newX = badguys[i].x+((Math.random()* 5)-2) // makes zombies jitter on the x axis
      newY= badguys[i].y+((Math.random()* 4)-2)// makes zombies jitter on the y axis
    }
    badguys[i].y=newY
    badguys[i].x=newX
    fill('green')
    circle(badguys[i].x,badguys[i].y,30)
    fill('black')
  }
  return true
}
function speedStartStop(){
if (speedup ==false){
  player.speed=10
  speedup=true
  return
}else if (speedup==true){
  player.speed=1
  speedup=false
  return
} else {
  speedup=false
  return
}
}

function draw(){
  console.log(badguys)
  background(124, 252, 0	)
  text(points,35,45)
  text("Points",25,32)
  text(level,90,45)
  text("Level",80,32)
  if (game == false){
    console.log("end")
  }
if (game==true){
  if (badguys.length==0){
    for (let i=0;i<level;i++){
      badguys.push(new bad_guy(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()* windowHeight+1)))
      while (getdistance(badguys[i].x,badguys[i].y,player.x,player.y)<200){
        badguys.splice(i,1)
        badguys.push(new bad_guy(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()* windowHeight+1)))
      }
    }
    level++
    }
  circle(player.x,player.y,20)
  // Lets the player move and keeps them in bounds
  if (keyIsDown(65) === true) {
    player.x -= player.speed;
  }

  if (keyIsDown(68) === true) {
    player.x += player.speed;
  }

  if (keyIsDown(87) === true) {
    player.y -= player.speed;
  }

  if (keyIsDown(83) === true) {
    player.y += player.speed;
  }
  if(player.x-10<0){//off left
    player.x=player.x+player.speed
  }
  if(player.x+10>windowWidth){//off right
    player.x=player.x-player.speed
  }
  if(player.y-10<0){//off top
    player.y=player.y+player.speed
  }
  if(player.y+10>windowHeight){//off bottom
    player.y=player.y-player.speed
  }
  circle(player.x,player.y,20)
  game=moveBadGuy()
}
}
