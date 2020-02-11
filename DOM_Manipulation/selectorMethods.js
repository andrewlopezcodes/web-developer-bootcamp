

var buttonChanger = document.getElementById("firstButton");
buttonChanger.style.border = "2px solid blue";
var isBlue = false;
buttonChanger.addEventListener("click", function(){
  
  if(isBlue){
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "blue";
  }
  isBlue = !isBlue;
})