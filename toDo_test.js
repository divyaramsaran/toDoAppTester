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
