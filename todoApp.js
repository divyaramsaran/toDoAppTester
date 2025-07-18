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

console.log(getNewTodoItem());
