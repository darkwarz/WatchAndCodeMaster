var todoList = {  
     todos: [],
    addTodo: function(todoText) { // addTodo('hi')
      this.todos.push({
      todoText: todoText,
      completed: false
  });
  },
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
  },
    deleteTodo: function(position) {
      this.todos.splice(position,1);
  },
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
  },
    toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      
      // // Get number of completed todos.
      // for (var i = 0; i < totalTodos; i++) {
      //     if (this.todos[i].completed === true) {
      //         completedTodos++;
      //     }
      // }
      
      this.todos.forEach(function(todo) {
        if (todo.completed === true) {
          completedTodos++;
        }
      });
      
      
      // //Case 1: If everything's true, make everything false.
      // if (completedTodos === totalTodos) {
      //     // Make everything false.
          
      //     // for (var i = 0; i < totalTodos; i++) {
      //     //     this.todos[i].completed = false;
          
      //   ** this.todos.forEach(function(todo) {
      //       todo.completed = false;
      //     });
          
      //         // Case: 2: Otherwise, make everything true
          
      // } else {
      //     // for (var i = 0; i < totalTodos; i++) {
      //     //     this.todos[i].completed = true;
          
      //   **  this.todos.forEach(function(todo) {
      //       todo.completed = true;
      //     });
      //     }
      
      this.todos.forEach(function(todo) {
        //case 1: If everything's true; make everything false
        if (completedTodos === totalTodos) {
          todo.completed = false;
          //Case 2: Otherwise, make everything true.
        } else {
          todo.completed = true;
        }
      });
    }
};

    var handlers = {
    //old display todos
    //   displayTodos: function() {
    // //     todoList.displayTodos();
    // },
    addTodo: function() {
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
      view.displayTodos(); // new display todo method
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
      view.displayTodos(); // new display todo method
    },
    deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = '';
      view.displayTodos();
    },
    toggleCompleted: function(){
      var toggleCompletedPositionInput= document.getElementById('toggleCompletdPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber); // .valueAsNumber makes value a number in the position without allowing strings
      toggleCompletedPositionInput.value = '';
      view.displayTodos();
    },
      toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

// displays in the DOM 
    var view = {
      displayTodos: function() {
      var todosUl = document.querySelector('ul');
      todosUl.innerHTML = '';
    //   for (var i = 0; i < todoList.todos.length; i++)  {
    //     var todoLi = document.createElement('li');
    //     var todo = todoList.todos[i];
    //     var todoTextWithCompletion = '';
         
    //     if (todo.completed === true) {
    //         todoTextWithCompletion = '(x)' + todo.todoText;
    //     } else {
    //         todoTextWithCompletion = '( )' + todo.todoText;
    //     }
         
    //     todoLi.id = i;
    //     todoLi.textContent = todoTextWithCompletion;
    //     todoLi.appendChild(this.createDeleteButton());
    //     todosUl.appendChild(todoLi);
    // }
      todoList.todos.forEach(function(todo, position) {
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = '';
        
        if (todo.completed === true) {
          todoTextWithCompletion = '(x)' + todo.todoText;
        } else {
          todoTextWithCompletion = '( ) ' + todo.todoText;
        }
        
        todoLi.id = position;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
      }, this);
   },  
   createDeleteButton: function() {
     var deleteButton = document.createdElement('button');
     deleteButton.textContent = 'Delete';
     deleteButton.className = 'deleteButton';
     return deleteButton;
   },
   setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

  todosUl.addEventListener('click', function(event) {
    // Get the element that was clicked on.
    var elementClicked = event.target;
    
    // Check if elementclicked is a delete button.
    if (elementClicked.className === 'deleteButton') {
      handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
    }
});
}
};

view.setUpEventListeners();

// old Code for view todo in Console

//   displayTodos: function() {
//     if (this.todos.length === 0) {
//       console.log('Your todo list is empty!');
//     } else {
//       console.log('My Todos:')
//     for (var i = 0; i < this.todos.length; i++){
//       if (this.todos[i].completed === true) {
//           console.log('(x)', this.todos[i].todoText);
//       } else {
//       console.log('( )', this.todos[i].todoText);
//          }
//         }
//       }    
//       },