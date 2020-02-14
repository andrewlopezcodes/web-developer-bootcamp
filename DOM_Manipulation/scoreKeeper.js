

//GamePlay
var gameOver = false;
var gameFinishScore = document.getElementById("gameFinishScore");

//Playing to score
var playTillNumber = document.querySelector("input");
var playTillNumberValue = playTillNumber.value;
var winningScore = playTillNumberValue;


//Player 1
var player1Title = document.getElementById("player1");
var htmlPlayer1Score = document.getElementById("player1Score");
var player1Score = 0;
var player1Button = document.getElementById("player1Button");

player1Button.addEventListener('click', function (){
  if(!gameOver){
    player1Score++;
    player1Button.classList.add("btn-outline-danger");
    console.log(player1Score);
    if(playTillNumber.value == player1Score){
      gameOver = true;
      htmlPlayer1Score.classList.add("winner");
      if(htmlPlayer1Score.className === "winner")
      player1Title.innerText = "Player 1, You have won!!!";
    }
    htmlPlayer1Score.innerText = player1Score;
  }
  
});

//Player 2
var player2Title = document.getElementById("player2");
var htmlPlayer2Score = document.getElementById("player2Score");
var player2Score = 0;
var player2Button = document.getElementById("player2Button");

player2Button.addEventListener("click", function(){
  if(!gameOver){
    player2Score++;
    player2Button.classList.add("btn-outline-primary");
    console.log(player2Score);
    if(playTillNumber.value == player2Score){
      htmlPlayer2Score.classList.add("winner");
      gameOver = true;
      if(htmlPlayer2Score.className === "winner")
      player2Title.innerText = "Player 2, You have won!!!";
    }
    htmlPlayer2Score.innerText = player2Score;
  }
});

//Playing to number
playTillNumber.addEventListener("change", function(){
  gameFinishScore.innerText = playTillNumber.value;
});

//Reset Button
var resetButton = document.getElementById("resetScores");
resetButton.addEventListener("click", function(){
  player1Score = 0;
  player2Score = 0;
  htmlPlayer1Score.innerText = player1Score;
  htmlPlayer2Score.innerText = player2Score;
  htmlPlayer1Score.classList.remove("winner");
  htmlPlayer2Score.classList.remove("winner");
  gameFinishScore.innerText = 0;
  gameOver = false;
  location.reload();
});


// //buttons
// var buttons = docutment.querySelector("button);

//   buttons.addEventListener("mouseover", function(){
//     for(var i = 0; i<buttons.length; i++){
//       this.classList.add("hovering");
//   });
  
//   buttons.addEventListener("mouseout", function(){
//     for(var t = 0; t<buttons.length; t++){
//       this.classList.remove("hovering");
//     }
//   });







//Program written by github: @andrewlopezcodes