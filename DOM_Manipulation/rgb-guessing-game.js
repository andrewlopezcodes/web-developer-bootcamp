//Creating random RGB numbers from 1 - 250

var min = 1;
var max = 250;
var numberOfRandomNumbersNeededForRGB;
var numberOfRandomNumbersNeededForSquares ;

var correctRGB = [];
var hardColorMixedArray = [];
var easyColorMixedArray = [];

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


//--------------------------------------------------------------------------------

//Creating random RGB combinations

function createRandomRGBCombinationsForSquares (){
  numberOfRandomNumbersNeededForSquares = 15;
  if(numberOfRandomNumbersNeededForSquares > 6){
    for(var d =0; d < numberOfRandomNumbersNeededForSquares; d++){
      colorMixedArray.push(getRandomIntInclusive(min, max));
      console.log(hardColorMixedArray);
    }  
  } else {
    for(var e = 0; e < numberOfRandomNumbersNeededForSquares; e++){
      easyColorMixedArray.push(getRandomIntInclusive(min, max));
      console.log(easyColorMixedArray)
    }
  }
}

var createdRGB2 = [];
var createdRGB3 = [];
var createdRGB4 = [];
var createdRGB5 = [];
var createdRGB6 = [];



  
  if(createdRGB2.length < 3 && numberOfRandomNumbersNeededForSquares > 6){
    createdRGB2.push(colorMixedArray[0]);
    colorMixedArray.shift();
    console.log(createdRGB2);
  } else if(createdRGB3.length < 3){
    createdRGB3.push(colorMixedArray[0]);
    colorMixedArray.shift();
    console.log(createdRGB3)
  } else if(createdRGB4.length < 3){
    createdRGB4.push(colorMixedArray[0]);
    colorMixedArray.shift();
  } else if(createdRGB5.length < 3){
    createdRGB5.push(colorMixedArray[0]);
    colorMixedArray.shift();
  }else if(createdRGB6.length < 3){
    createdRGB6.push(colorMixedArray[0]);
    colorMixedArray.shift();
  
  }
}

    colorMixedArray.push(createdRGB2);
    colorMixedArray.push(createdRGB3);
    colorMixedArray.push(createdRGB4);
    colorMixedArray.push(createdRGB5);
    colorMixedArray.push(createdRGB6);
    colorMixedArray.push(correctRGB);

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
}
//-------------------

var shuffledColorArray = shufflingArray(colorMixedArray);
console.log("this is the shuffledColorArray - ");  
console.log(shuffledColorArray);

  console.log("This is the colorMixedArray - " + colorMixedArray);
  console.log("This is the correctRGB array - " + correctRGB);
  
  console.log("The index of correctRGB is " + shuffledColorArray.indexOf(correctRGB));

 //attaching colors to boxes


  var firstColor = `rgb(` + shuffledColorArray[0].toString() + `)`;
  var secondColor = `rgb(` + shuffledColorArray[1].toString() + `)`;
  var thirdColor = `rgb(` + shuffledColorArray[2].toString() + `)`;
  var fourthColor = `rgb(` + shuffledColorArray[3].toString() + `)`;
  var fifthColor = `rgb(` + shuffledColorArray[4].toString() + `)`;
  var sixthColor = `rgb(` + shuffledColorArray[5].toString() + `)`;
  
  // var square1 = document.getElementById("colorBox1").style.backgroundColor = firstColor;
  // var square2 = document.getElementById("colorBox2").style.backgroundColor = secondColor;
  // var square3 = document.getElementById("colorBox3").style.backgroundColor = thirdColor;
  // var square4 = document.getElementById("colorBox4").style.backgroundColor = fourthColor;
  // var square5 = document.getElementById("colorBox5").style.backgroundColor = fifthColor;
  // var square6 = document.getElementById("colorBox6").style.backgroundColor = sixthColor;

  //EventListeners to make saures disapear
  