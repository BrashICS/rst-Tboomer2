console.log("Script loaded...")
let badguys = ["test"]
let keyIndex = -1;
function setup(){
  createCanvas(windowWidth,windowHeight-5);
  background(255,0,0);
  console.log(badguys)

}
class bad_guy {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
// Math.floor(Math.random()* windowWidth+1)
// Math.floor(Math.random()* windowHeight+1)

function shoot(){
  let i = 0
  console.log("Bang Bang")
  circle(mouseX , mouseY ,2);
  badguys.push(new bad_guy(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()* windowHeight+1)))
  console.log(badguys[1+i].x)
  console.log(badguys)
  console.log(i)

}
function mousePressed() {
  shoot()
  circle(Math.floor(Math.random()* windowWidth+1),Math.floor(Math.random()*windowHeight+1),5)
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
}

function draw(){
  keyPressed()
  if (keyIndex == 0){
    console.log("a")
  }
}
