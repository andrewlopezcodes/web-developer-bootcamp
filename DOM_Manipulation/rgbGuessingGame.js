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
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    
  });

}