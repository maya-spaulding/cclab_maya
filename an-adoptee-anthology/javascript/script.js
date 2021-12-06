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

function toggleHTMLcontent(onoff){
  if(onoff == false){
    document.getElementById("content_wrapper").style.pointerEvents = "none";
  }else{
    document.getElementById("content_wrapper").style.pointerEvents = "auto";
  }
}
function pickMouse(){
  choice = 'mouse';
  toggleHTMLcontent(true);
}
function pickPen(){
  toggleHTMLcontent(false);
  choice = 'pen';
}
function pickHighlighter(){
  choice = 'highlighter';
  toggleHTMLcontent(false);
}
function pickEraser(){
  choice = 'eraser';
  toggleHTMLcontent(false);
}
function pickClear(){
  background("white");
  toggleHTMLcontent(false);

}

function saveNow(){
  choice = 'save';
  html2canvas(document.getElementsByClassName("whole_page")[0]).then(canvas => {
  //     console.log(canvas);
    let img = canvas.toDataURL("image/png");
    // console.log(img);
    let a = document.createElement("a");
    a.href = img;
    a.download = "annotations.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  })
}

function setup(){
  let bodyHeight = document.getElementById("content_wrapper").scrollHeight

  let canvas = createCanvas(windowWidth, bodyHeight);
  canvas.parent("canvasContainer");
  background(255);
  tool = new ChooseTool(mouseX, mouseY);
}

function draw(){
  tool.update();
  tool.display();
}

function windowResized() {
  let bodyHeight = document.getElementById("content_wrapper").scrollHeight
  resizeCanvas(windowWidth, bodyHeight);
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
