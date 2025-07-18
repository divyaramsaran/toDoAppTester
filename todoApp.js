const getNewTodoItem = () => {
  const toDo = prompt("Enter a new todo item:");
  if (toDo) {
    return {
      id: Date.now(),
      text: toDo,
      completed: false,
    };
  }
  return null;
};

const addTodoItem = (todoList, todoItem) => {
  if (todoItem) {
    todoList.push(todoItem);
    console.log("Todo item added:", todoItem);
  } else {
    console.log("No todo item to add.");
  }
};
