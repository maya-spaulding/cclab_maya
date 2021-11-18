console.log("script works!");
let circlePosSlider = document.getElementById("circlePositionSlider");
let circleSZSlider = document.getElementById("circleSizeSlider");


function setup(){
  let canvas = createCanvas(200, 200);
  canvas.parent("canvasContainer");

}
function draw(){
  background(0);
  let sliderValue = circlePosSlider.value;
  let x = map(sliderValue, 0, 100, 0, width);

  let sizeValue = circleSZSlider.value;
  let size = map(sizeValue, 0, 100, 0, width);


  fill(255);
  circle(x, height/2, size);

}
