//Creating random RGB numbers from 1 - 250

var min = 1;
var max = 250;
var numberOfRandomNumbersNeededForRGB;
var numberOfRandomNumbersNeededForSquares = 15;

var correctRGB = [];
var menuRGB1 = document.getElementById("menuRGB1");
var menuRGB2 = document.getElementById("menuRGB2");
var menuRGB3 = document.getElementById("menuRGB3");
var hardColorMixedArray = [];
var easyColorMixedArray = [];
var createdRGBeasy1 = [];
var createdRGBeasy2 = [];
var createdRGBhard2 = [];
var createdRGBhard3 = [];
var createdRGBhard4 = [];
var createdRGBhard5 = [];
var createdRGBhard6 = [];
var finishedShuffledColorArray;
var intakeArray;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//-------------------------------------------------------------------------------

//Create correct RGB combination

function createCorrectRGB(){
  numberOfRandomNumbersNeededForRGB = 3;
  for(var i = 0; i < numberOfRandomNumbersNeededForRGB; i++){
    correctRGB.push(getRandomIntInclusive(min, max))
    console.log(correctRGB);
  }
  return correctRGB;
}

createCorrectRGB();
menuRGB1.innerText = correctRGB[0];
menuRGB2.innerText = correctRGB[1];
menuRGB3.innerText = correctRGB[2];

//--------------------------------------------------------------------------------

//Creating random RGB combinations

function fillingHardColorMixedArray(){
  if(createdRGBhard2.length < 3){
    createdRGBhard2.push(hardColorMixedArray[0]);
    hardColorMixedArray.shift();
    console.log("This is the createdRGBhard2 array - " + createdRGBhard2);
  } else if(createdRGBhard3.length < 3 ){
    createdRGBhard3.push(hardColorMixedArray[0]);
    hardColorMixedArray.shift();
  } else if(createdRGBhard4.length < 3 ){
    createdRGBhard4.push(hardColorMixedArray[0]);
    hardColorMixedArray.shift(createdRGBhard4);
  } else if(createdRGBhard5.length < 3 ){
    createdRGBhard5.push(hardColorMixedArray[0]);
    hardColorMixedArray.shift(createdRGBhard5);
  }else if(createdRGBhard6.length < 3 ){
    createdRGBhard6.push(hardColorMixedArray[0]);
    hardColorMixedArray.shift(createdRGBhard6);
    
  
  } else {
    console.log("help")
  } 
};
  

function createRandomRGBCombinationsForHardSquares (){
for(var d = 0; d < numberOfRandomNumbersNeededForSquares; d++){
    hardColorMixedArray.push(getRandomIntInclusive(min, max));
    fillingHardColorMixedArray(hardColorMixedArray);
  }
  
}

createRandomRGBCombinationsForHardSquares();


    hardColorMixedArray.push(createdRGBhard2);
    hardColorMixedArray.push(createdRGBhard3);
    hardColorMixedArray.push(createdRGBhard4);
    hardColorMixedArray.push(createdRGBhard5);
    hardColorMixedArray.push(createdRGBhard6);
    hardColorMixedArray.push(correctRGB);

    
 


    // shuffling colorMixedArray and finding correctRGB array index

let shufflingArray = function(arr){
  let newPosition;
  let temporaryIndex;

    //This is a backwards loop
  for(let e = arr.length -1; e >0; e--){
    newPosition = Math.floor(Math.random()*(e+1));
    temporaryIndex = arr[e];
    arr[e] = arr[newPosition];
    arr[newPosition] = temporaryIndex;
  }
  return arr;
};

//____________________
// for(var d =0; d < 15; d++){
//   colorMixedArray.push(getRandomIntInclusive(min, max));
//   console.log(colorMixedArray);

// if(createdRGB2.length < 3){
//   createdRGB2.push(colorMixedArray[0]);
//   colorMixedArray.shift();
//   console.log(createdRGB2);
// } else if(createdRGB3.length < 3){
//   createdRGB3.push(colorMixedArray[0]);
//   colorMixedArray.shift();
//   console.log(createdRGB3)
// } else if(createdRGB4.length < 3){
//   createdRGB4.push(colorMixedArray[0]);
//   colorMixedArray.shift(createdRGB4);
// } else if(createdRGB5.length < 3){
//   createdRGB5.push(colorMixedArray[0]);
//   colorMixedArray.shift(createdRGB5);
// }else if(createdRGB6.length < 3){
//   createdRGB6.push(colorMixedArray[0]);
//   colorMixedArray.shift(createdRGB6);

// }
// }

// colorMixedArray.push(createdRGB2);
// colorMixedArray.push(createdRGB3);
// colorMixedArray.push(createdRGB4);
// colorMixedArray.push(createdRGB5);
// colorMixedArray.push(createdRGB6);
// colorMixedArray.push(correctRGB);

// // shuffling colorMixedArray and finding correctRGB array index
// let shufflingArray = function(arr){
// let newPosition;
// let temporaryIndex;
//   //This is a backwards loop
// for(let e = arr.length -1; e >0; e--){
//   newPosition = Math.floor(Math.random()*(e+1));
//   temporaryIndex = arr[e];
//   arr[e] = arr[newPosition];
//   arr[newPosition] = temporaryIndex;
// }
// return arr;
// }

// //-------------------

// var shuffledColorArray = shufflingArray(colorMixedArray);
// console.log("this is the shuffledColorArray - ");  
// console.log(shuffledColorArray);

// console.log("This is the colorMixedArray - " + colorMixedArray);
// console.log("This is the correctRGB array - " + correctRGB);

// console.log("The index of correctRGB is " + shuffledColorArray.indexOf(correctRGB));

//-------------------



var colorsReadyForAttachment = shufflingArray(hardColorMixedArray);

console.log("this is the shufflingArray - ");  
console.log(colorsReadyForAttachment);

  console.log("This is the hardColorMixedArray - " + hardColorMixedArray);
  console.log("This is the easyColorMixedArray - " + easyColorMixedArray);
  console.log("This is the correctRGB array - " + correctRGB);
  
  // console.log("The index of correctRGB is " + finishedShuffledColorArray.indexOf(correctRGB));

 //attaching colors to boxes


  // var firstColor = `rgb(` + shuffledColorArray[0].toString() + `)`;
  // var secondColor = `rgb(` + shuffledColorArray[1].toString() + `)`;
  // var thirdColor = `rgb(` + shuffledColorArray[2].toString() + `)`;
  // var fourthColor = `rgb(` + shuffledColorArray[3].toString() + `)`;
  // var fifthColor = `rgb(` + shuffledColorArray[4].toString() + `)`;
  // var sixthColor = `rgb(` + shuffledColorArray[5].toString() + `)`;
  
  // // var square1 = document.getElementById("colorBox1").style.backgroundColor = firstColor;
  // // var square2 = document.getElementById("colorBox2").style.backgroundColor = secondColor;
  // // var square3 = document.getElementById("colorBox3").style.backgroundColor = thirdColor;
  // // var square4 = document.getElementById("colorBox4").style.backgroundColor = fourthColor;
  // // var square5 = document.getElementById("colorBox5").style.backgroundColor = fifthColor;
  // // var square6 = document.getElementById("colorBox6").style.backgroundColor = sixthColor;

  // //EventListeners to make saures disapear
  