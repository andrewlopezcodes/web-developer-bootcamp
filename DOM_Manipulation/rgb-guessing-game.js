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

for(var a = 0; a < capture.length; a++){
  correctRGBNum.splice(capture[a], 0, getRandomIntInclusive(min, max))
  console.log(correctRGBNum);
}


var correctRed = correctRGBNum[0];
var correctGreen = correctRGBNum[1];
var correctBlue = correctRGBNum[2];
document.getElementById("rgb1").innerText = correctRed;
document.getElementById("rgb2").innerText = correctGreen;
document.getElementById("rgb3").innerText = correctBlue;

//Change colors of cards
var cardMin = 0;
var cardMax = 5;
var capture2 = [0, 0, 0, 0, 0, 0];
var cardPosition = [];
var winningPosition = "The winning position of the RGB color is at index ";

function cardNumberSelected(cardMin, cardMax) {
  cardMin = Math.ceil(cardMin);
  cardMax = Math.floor(cardMax);
  return Math.floor(Math.random() * (cardMax - cardMin + 1)) + cardMin; //The maximum is inclusive and the minimum is inclusive
}

for(var b = 0; b <=1000; b++){
  let cardSelected = cardNumberSelected(cardMin, cardMax);
  console.log(cardSelected);

  if(cardPosition.length !== 6 && cardPosition.includes(cardSelected) === false){
    cardPosition.push(cardSelected);
  }
  console.log(cardPosition);
}

for(var c = 0; c < cardPosition.length; c++){
  if(cardPosition[c] === 1){
    console.log(winningPosition + c);
    cardPosition[c] = correctRGBNum;
  }
}

//attaching random colors to boxes

var colorBox1 = cardPosition[0];
var colorBox2 = cardPosition[1];
var colorBox3 = cardPosition[2];
var colorBox4 = cardPosition[3];
var colorBox5 = cardPosition[4];
var colorBox6 = cardPosition[5];

var colorMixedArray = [];

for(var d =0; d < 15; d++){
    colorMixedArray.splice(colorMixedArray[d], 0, getRandomIntInclusive(min, max))
    console.log(colorMixedArray);
}
