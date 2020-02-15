//create for random numbers

var min = 1;
var max = 250;
var capture = [0, 0, 0];
var correctRGBNum = []


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

for(var i =0; i<capture.length; i++){
  correctRGBNum.splice(capture[i], 0, getRandomIntInclusive(min, max))
  console.log(correctRGBNum);
}


var correctRed = correctRGBNum[0];
var correctGreen = correctRGBNum[1];
var correctBlue = correctRGBNum[2];
document.getElementById("rgb1").innerText = correctRed;
document.getElementById("rgb2").innerText = correctGreen;
document.getElementById("rgb3").innerText = correctBlue;

//Change colors of tiles
var capture2 = [0, 0, 0, 0, 0, 0]
var cardPosition = []

for(var a = 0; a<capture2.length; a++){
  
}