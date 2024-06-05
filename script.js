console.log("Script loaded...")
// setting up variables
let badguys = []
let keyIndex = -1;
let i = 0
let move = 1
let game = true
let points = 0
let level = 1
let player
class default_player {
  x;
  y;
  firerate;
  health;
  constructor(x,y,firerate,health){
    this.x=x;
    this.y=y;
    this.firerate = firerate;
    this.health=health;
  }
  }
// setingup the page does not do much
function setup(){
  createCanvas(windowWidth,windowHeight-5);
  background(255,0,0);
  console.log(badguys)
  badguys.push(new bad_guy(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()* windowHeight+1)))
  player= new default_player(windowWidth/2,windowHeight/2,10,10)

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
    if (badguys[i].x<player.x+10&&badguys[i].x>player.x-10){
      if (badguys[i].y<player.y+ 10&&badguys[i].y>player.y-10){
        console.log("DIE DIE DIE")
        game = false
        return false
    }
  }
    newX = badguys[i].x+((Math.random()* 4)-2)
    newY= badguys[i].y+((Math.random()* 4)-2)
    while (getdistance(newX,newY,player.x,player.y)>getdistance(badguys[i].x,badguys[i].y,player.x,player.y)){
      //||(!(getdistance(badguys[i].x,badguys[i].y,mouseX,mouseY)>2)))
      newX = badguys[i].x+((Math.random()* 5)-2)
      newY= badguys[i].y+((Math.random()* 4)-2)
    }
    badguys[i].y=newY
    badguys[i].x=newX
    circle(badguys[i].x,badguys[i].y,30)

  }
  return true
}

function draw(){
  console.log(badguys)
  background(124, 252, 0	)
  text(points,40,45)
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
  if (keyIsDown(65) === true) {
    player.x -= move;
  }

  if (keyIsDown(68) === true) {
    player.x += move;
  }

  if (keyIsDown(87) === true) {
    player.y -= move;
  }

  if (keyIsDown(83) === true) {
    player.y += move;
  }
  if(player.x-10<0){//off left
    player.x=player.x+move
  }
  if(player.x+10>windowWidth){//off right
    player.x=player.x-move
  }
  if(player.y-10<0){//off top
    player.y=player.y+move
  }
  if(player.y+10>windowHeight){//off bottom
    player.y=player.y-move
  }
  circle(player.x,player.y,20)
  game=moveBadGuy()
}
}
