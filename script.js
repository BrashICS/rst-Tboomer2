console.log("Script loaded...")
// setting up variables
let badguys = []
let keyIndex = -1;
let i = 0
// setingup the page does not do much
function setup(){
  createCanvas(windowWidth,windowHeight-5);
  background(255,0,0);
  console.log(badguys)

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
let player= new default_player(30,30,10,10)
// Math.floor(Math.random()* windowWidth+1)
// Math.floor(Math.random()* windowHeight+1)
// gives you the ability to shoot the gun does not do much yet
function shoot(){
  i++
  console.log("Bang Bang")
  circle(mouseX , mouseY ,2);
  badguys.push(new bad_guy(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()* windowHeight+1)))
  console.log(badguys)
}

function mousePressed() {
  shoot()
  moveBadGuy()
  circle(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()*windowHeight+1),5)
}


// function keyPressed() {
//   let keyIndex = -1;
//   if (key >= 'a' && key <= 'z') {
//     console.log("KEY PRESSED")
//     keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
//     console.log(keyIndex)
//   }
//   if (keyIndex == 0){
//     player.x=player.x-2
//   }else if (keyIndex ==22){
//     player.y=player.y-2
//   }else if (keyIndex == 3){
//     player.x=player.x+2
//   }else if (keyIndex == 18){
//     player.y=player.y+2
//   }
// }
function getdistance(u,o,p,l){
  return(Math.sqrt(Math.pow((u-p),2)))+(Math.sqrt(Math.pow((o-l),2)))
}

// IMPORTANT FUNCTION
// this is how all the enemys move about
function moveBadGuy(){
  for (let i=0;i<badguys.length;i++){
    newX = badguys[i].x+((Math.random()* 5)-2.5)
    newY= badguys[i].y+((Math.random()* 5)-2.5)
    while (getdistance(newX,newY,player.x,player.y)>getdistance(badguys[i].x,badguys[i].y,player.x,player.y)){
      //||(!(getdistance(badguys[i].x,badguys[i].y,mouseX,mouseY)>2)))
      newX = badguys[i].x+((Math.random()* 5)-2.5)
      newY= badguys[i].y+((Math.random()* 5)-2.5)
    }
    badguys[i].y=newY
    badguys[i].x=newX
    circle(badguys[i].x,badguys[i].y,12)

  }
}
function draw(){
  let newY
  let newX
  background(124, 252, 0	)
  circle(player.x,player.y,10)
  if (keyIsDown(65) === true) {
    player.x -= 1;
  }

  if (keyIsDown(68) === true) {
    player.x += 1;
  }

  if (keyIsDown(87) === true) {
    player.y -= 1;
  }

  if (keyIsDown(83) === true) {
    player.y += 1;
  }
  circle(player.x,player.y,20)
  moveBadGuy()
}
