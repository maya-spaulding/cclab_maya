let DancerPosSlider = document.getElementById("DancerPositionSlider");
let lookLeft = document.getElementById('lookLeft');
lookLeft.addEventListener('click', flipLeft);

let lookRight = document.getElementById('lookRight');
lookRight.addEventListener('click', flipRight);

let flip = true;
let positionX;
let dancer;


function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(475, 500);
  canvas.parent("canvasContainer");

  // ...except to adjust the dancer's name on the next line:
  dancer = new MayaDancer(0, height/2);


}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(240);
  push();
  fill(0);
  rect(0, height/2, width, height/2);
  pop();
  let sliderValue = DancerPosSlider.value;
  let positionX = map(sliderValue, 0, 100, 0, width);
  push();
  translate(positionX, 0);
  dancer.update();
  dancer.display();
  drawFace();
  pop();


}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class MayaDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.angle2 = 0;
    this.angle3 = 0;
    this.angle4 = 0;
    this.angle5 = 0;
    // this.reflect = -1;
    this.R = map(random(), 0, 1, 0, 255);
    this.G = map(random(), 0, 1, 0, 255);
    this.B = map(random(), 0, 1, 0, 255);



    // add properties for your dancer here:


  }
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.swing();
    // this.flip();


  }
  display(){
    // console.log(this.x);
    // draw your dancer here
    //call functions here
    push();
    translate(this.x, this.y);
    this.drawPenguin();
    this.drawLArm();
    this.drawRArm();
    // this.drawFace();
    pop();


  }
  swing(){
    this.angle = map(sin(frameCount*0.15), -1,1,-0.075,0.075);
    this.angle2 = map(cos(frameCount*0.2), -1,1,-0.05,0.05);
    this.angle3 = map(cos(frameCount*0.2+PI/4), -1,1,-0.05,0.05);
    this.angle4 = map(cos(frameCount*0.2), -1,1,-0.075,0.075);
    this.angle5 = map(cos(frameCount*0.2+PI/3), -1,1,-0.075,0.075);

  }
  // flip(){
  //   this.factor = random(0,20);
  //   if(round(this.factor) == 0){
  //     this.reflect = 1;
  //
  //   }else if(round(this.factor) == 20){
  //     this.reflect = -1;
  //
  //   }
  // }
  drawPenguin(){
    //body
    rotate(this.angle);
    push();
    ellipse(0,0,50,100);
    pop();

    push();
    translate(0,-50);
    fill(0);
    circle(0,0,40);
    fill(255);
    circle(0,5,35);
    pop();

    //clothes
    push();
    translate(0, -67);
    fill(0);
    rectMode(CENTER);
    rect(0,0,50,5);
    rect(0,-15,30,30);
    pop();

    push();
    translate(0, -5);
    rectMode(CENTER);
    fill(this.R, this.G, this.B);
    rect(0,-19,5,5);
    beginShape();
    vertex(-2.5, -15);
    vertex(2.5, -15);
    vertex(4, 10);
    vertex(0, 15);
    vertex(-4, 10);
    endShape(CLOSE);
    pop();

    //feet
    push();
    translate(17, 47);
    rotate(this.angle2);
    fill(0);
    stroke(255);
    arc(0,0,25,10, 180, PI,CHORD);
    pop();

    push();
    translate(-17, 47);
    rotate(this.angle4);
    fill(0);
    stroke(255);
    arc(0,0,25,10, 180, PI,CHORD);
    pop();
  }
  drawLArm(){
    push();
    translate(-25,-38);
    rotate(0.25+ this.angle5);
    ellipseMode(CORNER);
    fill(0);
    stroke(255);
    ellipse(0,0,15,75);
    pop();
  }

  drawRArm(){
    push();
    translate(10,-35);
    rotate(-0.25+ this.angle2);
    ellipseMode(CORNER);
    fill(0);
    stroke(255);
    ellipse(0,0,15,75);
    pop();
  }
  // drawFace(){
  //   //eye
  //   push();
  //   translate(0,-50);
  //   fill(0);
  //   circle(this.reflect*5,0,7);
  //   pop();
  //
  //   //beak
  //   push();
  //   translate(this.reflect*20, -55);
  //   fill("orange");
  //   triangle(0,0,0,10,this.reflect*10,5);
  //   pop();
  //
  // }
}
function flipLeft(){
  flip = true;
}
function flipRight(){
  flip = false;
}
function drawFace(){
  if(flip == true){
    reflect = -1;
  }else if(flip == false){
    reflect = 1;
  }
  angle = map(sin(frameCount*0.15), -1,1,-0.075,0.075);
  push();
  translate(0, height/2);
  rotate(angle);
  //eye
  push();
  translate(reflect*5, -50);
  fill(0);
  circle(0,0,7);
  pop();

  //beak
  push();
  translate(reflect*20, -55);
  fill("orange");
  triangle(0,0,0,10,reflect*10,5);
  pop();
  pop();
}
