

let img;
let horseX = 100;
let imageArray = [];
let horseIndex = 0;

function preload(){
  console.log('hello');
  for(let i = 1; i < 12; i++){
    // console.log("assets/images/horse"+i+".jpg");
    let path = "assets/images/horse"+i+".jpg";
    console.log("loading", path);
    let img = loadImage(path);
    imageArray.push(img);
  }
  console.log(imageArray);
  // img = loadImage("assets/images/horse1.jpg");
}

function setup(){
  createCanvas(800, 300);
}


function draw(){
  background(0);
  image(imageArray[horseIndex], horseX, 0, 200, 150);
  horseIndex+=1;
  if(horseIndex>10){
    horseIndex = 0;
  }
  horseX+=7;
  if(horseX > width){
    horseX = -200;
  }
}
