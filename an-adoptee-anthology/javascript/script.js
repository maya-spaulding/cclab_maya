let mouse = document.getElementById('mouse');
mouse.addEventListener('click', pickMouse);

let pen = document.getElementById('pen');
pen.addEventListener('click', pickPen);

let highlighter = document.getElementById('highlighter');
highlighter.addEventListener('click', pickHighlighter);

let eraser = document.getElementById('eraser');
eraser.addEventListener('click', pickEraser);

let clear = document.getElementById('clear');
clear.addEventListener('click', pickClear);

let save = document.getElementById('save');
save.addEventListener('click', saveNow);

let choice = 'none';

function pickMouse(){
  choice = 'mouse';
}
function pickPen(){
  choice = 'pen';
}
function pickHighlighter(){
  choice = 'highlighter';
}
function pickEraser(){
  choice = 'eraser';
}
function pickClear(){
  background("white");
}

function saveNow(){
  choice = 'save';
}

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  background(255);
  tool = new ChooseTool(mouseX, mouseY);
}

function draw(){
  tool.update();
  tool.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class ChooseTool{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY
    this.currX = 0;
    this.currY = 0;
    this.prevX = 0;
    this.prevY = 0;
  }
  update(){
    this.prevX = this.currX;
    this.prevY = this.currY;
  }
  display(){
    this.choose();
  }
  choose(){
    this.currX = mouseX;
    this.currY = mouseY;
    if(choice == 'mouse'){}
    if(choice == 'pen'){
      strokeWeight(3);
      stroke(0);
      this.annotate();
    }
    if(choice == 'highlighter'){
      strokeWeight(15);
      stroke(255, 255, 0);
      this.annotate();
    }
    if(choice == 'eraser'){
      strokeWeight(20);
      stroke("white");
      this.annotate();
    }
  }
  annotate(){
    if(mouseIsPressed){
      line(this.prevX, this.prevY, this.currX, this.currY);
    }
  }
}
