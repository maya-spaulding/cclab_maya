function say(what){
  // console.log("Broswer is saying: " + what);
  let elem = document.getElementById('lyrics');
  console.log(elem);
  //programatically create new paragraph element
  let newElem = document.createElement('p');
  newElem.innerHTML = what;
  //add new paragraph to the lyrics div
  elem.appendChild(newElem);
}

function makeCircle(){
  let elem = document.getElementById('rect');
  //border-radius
  elem.style.borderRadius = '50px';
}

function makeRect(){
  let elem = document.getElementById('rect');
  elem.style.borderRadius = '0px';
}

let circleButton = document.getElementById('circleButton');
circleButton.addEventListener('click', makeCircle);

let rectButton = document.getElementById('rectButton');
rectButton.addEventListener('click', makeRect);
