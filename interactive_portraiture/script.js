let img;
let cam;

function preload(){
  img = createImage(640, 480);
}

function setup(){
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw(){
  background("yellow");


  //access pixels of image
  //load pixels
  img.loadPixels();
  cam.loadPixels();
  //loop over each row;
  for(let y = 0; y < 480; y++){
    //loop over each column
    for(let x = 0; x < 640; x++){
      // code inside here is run 307,200 times
      //inside img.pixels, there are 1,228,800 elements
      let index = (y * width + x )* 4;

      //read value from camera pixel array
      //get color from cam pixels
      let red   = cam.pixels[index + 0];
      let green = cam.pixels[index + 1];
      let blue  = cam.pixels[index + 2];
      // let alpha = cam.pixels[index + 3];
      let distance = dist(mouseX, mouseY, x, y);

      //create variables for inversion
      let iFactorR = 255 - red;
      let iFactorG = 255 - green;
      let iFactorB = 255 - blue;

      if(distance < 100){
        img.pixels[index + 0] = red; //R
        img.pixels[index + 1] = green; //G
        img.pixels[index + 2] = blue; //B
        img.pixels[index + 3] = 255; //A
      }else{
        //change values inside img pixel array
        img.pixels[index + 0] = iFactorR; //R
        img.pixels[index + 1] = iFactorG; //G
        img.pixels[index + 2] = iFactorB; //B
        img.pixels[index + 3] = 255; //A
      }
    }
  }
  //update pixels;
  img.updatePixels();

  image(img, 0, 0);
}
