var colors = getRandomColors(6);

var squares = document.querySelectorAll(".square");
var correctColor = getCorrectColor();
var colorDisplay = document.getElementById("colorDisplay");
var statusDisplay = document.getElementById("statusDisplay");
var headerMessage = document.getElementById("headerMessage");
var newColorsButton = document.getElementById("newColorsButton");
var easyModeButton = document.getElementById("easyModeButton");
var hardModeButton = document.getElementById("hardModeButton");
colorDisplay.textContent = correctColor;

newColorsButton.addEventListener("click", function(){
  colors = getRandomColors(6);
  correctColor = getCorrectColor();
  colorDisplay.textContent = correctColor;
  for(var d = 0; d < squares.length; d++){
    squares[d].style.backgroundColor = colors[d];
  }
});

for(var a = 0; a < squares.length; a++){
  squares[a].style.backgroundColor = colors[a];
  squares[a].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === correctColor){
      // squares.style.background = pickedColor;
      changeAllSquareColors(clickedColor);
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

