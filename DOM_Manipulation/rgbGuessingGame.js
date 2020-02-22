var colors = [
  "rgb(255, 2, 3)",
  "rgb(1, 255, 3)", 
  "rgb(1, 2, 255)", 
  "rgb(155, 255, 3)", 
  "rgb(1, 255, 30)", 
  "rgb(130, 234, 38)" 
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var statusDisplay = document.getElementById("statusDisplay");
var headerMessage = document.getElementById("headerMessage");
var newColorsButton = document.getElementById("newColors");
colorDisplay.textContent = pickedColor;

for(var a = 0; a < squares.length; a++){
  squares[a].style.backgroundColor = colors[a];
  squares[a].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      // squares.style.background = pickedColor;
      statusDisplay.innerText = "Congrats. You Win!!!"
      headerMessage.style.backgroundColor = pickedColor;
      newColorsButton.innerText = "Play Again?";
    } else {
      this.style.backgroundColor = "black";
      statusDisplay.innerText = "Try Again!";

    }
  });

}

function changeAllSquareColors(colors){
  for(var b = 0; b < colors.length; b++){
    
  };
}