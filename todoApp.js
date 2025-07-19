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

const displayTodoList = (todoList) => {
  if (todoList.length === 0) {
    console.log("No todo items found.");
    return;
  }
  console.log("Todo List:");
  todoList.forEach((item) => {
    console.log(
      `${item.id}: ${item.text} [${item.completed ? "Completed" : "Pending"}]`
    );
  });
};

const main = (todoList) => {
  let action;
  do {
    action = prompt("Choose an action: (1) Add Todo (2) View Todos (3) Exit");
    switch (action) {
      case "1":
        const newTodoItem = getNewTodoItem();
        addTodoItem(todoList, newTodoItem);
        break;
      case "2":
        displayTodoList(todoList);
        break;
      case "3":
        console.log("Exiting the todo app.");
        break;
      default:
        console.log("Invalid action. Please try again.");
    }
  } while (action !== "3");
};
main([]);
