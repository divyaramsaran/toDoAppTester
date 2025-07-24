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

  assertEquals(markTodoAsCompleted(todoList, 1).completed, true);
  assertEquals(markTodoAsCompleted(todoList, 2).completed, true);
});

Deno.test("markTodoAsCompleted does not change non-existent todo item", () => {
  const todoList = [
    { id: 1, text: "Test Todo 1", completed: false },
    { id: 2, text: "Test Todo 2", completed: false },
  ];

  assertEquals(markTodoAsCompleted(todoList, 3), null);
  assertEquals(markTodoAsCompleted(todoList, 4), null);
});

Deno.test("displayTodoList handles empty todo list", () => {
  const todoList = [];
  const output = displayTodoList(todoList);
  assertEquals(output, null);
});