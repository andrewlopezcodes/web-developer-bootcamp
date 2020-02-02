var myAge = prompt("Let me see your ID. How old are you?");


if(myAge < 0) {
  alert("REFRESH THIS PAGE");
} else if(myAge >18 && myAge < 21 ){
  alert(myAge +" You can get in but you can't drink! Don't make me throw you out!")
} else if(myAge >= 21){
  alert(myAge +" You can get in and drink! Have a good time.");
} else {
  alert("Kid GET THE HELL OUTTA HERE!!!!"); 
}
