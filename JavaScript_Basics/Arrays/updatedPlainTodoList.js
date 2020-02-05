


window.setTimeout(function(){
  var todoList=[];
  var imput = prompt("What would you like to do?");

  while(imput !== "quit"){
    if(imput === "delete"){
        var removeItemNum = prompt("What number is the todo you would like to remove?");
        todoList.splice(removeItemNum, 1);
        console.log(todoList);
    } else if(imput === "list" || imput === "List" || imput === "LIST"){
      todoList.forEach(function(j){
        console.log("**********");
        console.log(todoList.indexOf(j)+ ": " + j);
        console.log("**********");
      });
      console.log(todoList);
    } else if (imput === "add"){
      var addTodo = prompt("what activity would you like to add to the Todo List?");
      todoList.push(addTodo);
    }
    imput = prompt("what would you like to do?");
  }
  console.log("Have a nice day!")
}, 500);
