


window.setTimeout(function(){
  var todoList=[];
  var imput = prompt("What would you like to do?");

  while(imput !== "quit"){
    if(imput === "delete"){
        deleteTodo();
      } else if(imput === "list" || imput === "List" || imput === "LIST"){
        listTodoList();
      } else if (imput === "add"){
        addTodo();
      }
    imput = prompt("what would you like to do?");
    
  }
  function deleteTodo(){
    var removeItemNum = prompt("What number is the todo you would like to remove?");
      todoList.splice(removeItemNum, 1);
      console.log(todoList);
  }

  function listTodoList(){
    todoList.forEach(function(j){
      console.log("**********");
      console.log(todoList.indexOf(j)+ ": " + j);
    });
    console.log("**********");
    console.log(todoList);
  }

  function addTodo(){
    var addTodoItem = prompt("what activity would you like to add to the Todo List?");
    todoList.push(addTodoItem);
  }
  console.log("Have a nice day!")
}, 500);
