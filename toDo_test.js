import { assertEquals } from "jsr:@std/assert";
import {
  addTodoItem,
  displayTodoList,
  markTodoAsCompleted,
} from "./todoApp.js";

Deno.test("addTodoItem adds a new todo item", () => {
  const todoList = [];
  const newItem = { id: 1, text: "Test Todo", completed: false };
  addTodoItem(todoList, newItem);
  assertEquals(todoList.length, 1);
  assertEquals(todoList[0], newItem);
});

Deno.test("displayTodoList displays all todo items", () => {
  const todoList = [
    { id: 1, text: "Test Todo 1", completed: false },
    { id: 2, text: "Test Todo 2", completed: true },
  ];
  const output = displayTodoList(todoList);
  assertEquals(output, "1. [ ] Test Todo 1\n2. [x] Test Todo 2");
});

Deno.test("markTodoAsCompleted marks a todo item as completed", () => {
  const todoList = [
    { id: 1, text: "Test Todo 1", completed: false },
    { id: 2, text: "Test Todo 2", completed: false },
  ];
  markTodoAsCompleted(todoList, 1);
  assertEquals(todoList[0].completed, true);
  assertEquals(todoList[1].completed, false);
});