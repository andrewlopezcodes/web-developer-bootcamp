/* 
-- What's Happening in this code --
1) The window.setTimeout function is taking in an annonymous function that it is immediately calling 1/2 a second (500 miliseconds) into the loading of the document in the browser.

2) We declared a variable todoList is set to an empty string
3) We declared an variable input which is set to prompt("What would you like to do?") . Once input is called it will send a prompt to the browser for the user to be able to enter one of the three options: 
  new
  quit
  list
4) we created a while loop so that the program runs continuously until the "quit" condition is met to be true
5) If the user enters new in the prompt screen we've declared a variable newTodoItem which will send a prompt to the browser asking "What do you want to add to the Todo List?" and store the response in the variable newTodoItem. The program using the "push()" method on the todoList array will take the stored newTodoItem item and put it into the todoList array.

6) If the user enters "list" in the prompt screen that was called using the variable "input" the program will list the items in the todoList array

7) once "quit" is entered into the prompt the prompt from variable "input" will no longer appear.

*/


window.setTimeout(function(){
 var todoList = [];
 var input = prompt("What would you like to do?");
 
 while(input !== "quit"){
  if(input === "new"){
    var newTodoItem = prompt("What do you want to add to the Todo List?");
    todoList.push(newTodoItem);
  } else if (input === "list"){
    console.log(todoList);
  }
  input = prompt("What would you like to do?")
 }
  
}, 500)

