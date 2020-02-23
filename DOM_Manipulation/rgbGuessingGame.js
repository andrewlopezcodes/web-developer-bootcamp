var colors = getRandomColors(6);

var squares = document.querySelectorAll(".square");
var correctColor = getCorrectColor();
var colorDisplay = document.getElementById("colorDisplay");
var statusDisplay = document.getElementById("statusDisplay");
var headerMessage = document.getElementById("headerMessage");
var newColorsButton = document.getElementById("newColorsButton");
var easyModeButton = document.getElementById("easyModeButton");
var hardModeButton = document.getElementById("hardModeButton");
var directions = document.getElementById("directions");
var easyModeOn = false;
var hardModeOn = false;


colorDisplay.textContent = correctColor;

easyModeButton.addEventListener("click", function(){
  this.classList.add("modeSelected");
  easyModeOn = true;
  hardModeOn = false;
  
  for(var e = 3; e < squares.length; e++){
    squares[e].style.display = "none";
    squares[e].classList.remove("square");
  }

  hardModeButton.classList.remove("modeSelected");
  headerMessage.style.backgroundColor = "black";
  directions.style.backgroundColor = "black";
  colors = [];
  colors = getRandomColors(3);
  correctColor = getCorrectColor();
  colorDisplay.textContent = correctColor;
  for(var e = 0; e < squares.length; e++){
    if(squares[e]){
      squares[e].style.backgroundColor = colors[e];
    } 
  }
});

hardModeButton.addEventListener("click", function(){
  this.classList.add("modeSelected");
  easyModeOn = false;
  hardModeOn = true;
  for(var f = 3; f < squares.length; f++){
    squares[f].style.display = "block";
    squares[f].classList.add("square");
  }
  easyModeButton.classList.remove("modeSelected");
  headerMessage.style.backgroundColor = "black";
  directions.style.backgroundColor = "black";
  colors = [];
  colors = getRandomColors(6);
  correctColor = getCorrectColor();
  colorDisplay.textContent = correctColor;
  for(var f = 0; f < squares.length; f++){
    if(squares[f]){
      squares[f].style.backgroundColor = colors[f];
    } 
  }
});

newColorsButton.addEventListener("click", function(){
  if(hardModeOn === true){
    colors = getRandomColors(6);
  } else {
    colors = getRandomColors(3);
  }
  
  correctColor = getCorrectColor();
  colorDisplay.textContent = correctColor;
  for(var d = 0; d < squares.length; d++){
    squares[d].style.backgroundColor = colors[d];
  }
  headerMessage.style.backgroundColor = "black";
  directions.style.backgroundColor = "black";
  statusDisplay.innerText = " "
});

for(var a = 0; a < squares.length; a++){
  squares[a].style.backgroundColor = colors[a];
  squares[a].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === correctColor){
      // squares.style.background = pickedColor;
      changeAllSquareColors(clickedColor);
      directions.style.backgroundColor = correctColor;
      statusDisplay.innerText = "Congrats. You Win!!!"
      headerMessage.style.backgroundColor = correctColor;
      newColorsButton.innerText = "Play Again?";
    } else {
      this.style.backgroundColor = "black";
      statusDisplay.innerText = "Try Again!";

    }
  });

}

function changeAllSquareColors(color){
  for(var b = 0; b < squares.length; b++){
    squares[b].style.backgroundColor = color;
  };
};

function getCorrectColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function getRandomColors(num){
  arr =[]

  for(var c = 0; c < num; c++){
    let min = 1;
    let max = 255;
    var redColorNumber = getNumberForColor(min, max);
    var greenColorNumber = getNumberForColor(min, max);
    var blueColorNumber = getNumberForColor(min, max);
    var colorString = "rgb(" + redColorNumber + ", " + greenColorNumber + ", " + blueColorNumber + ")"
    arr.push(colorString);
  }

  return arr
}

function getNumberForColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

