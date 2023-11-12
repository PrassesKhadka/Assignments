import Todo from "./factories/todo.js";
import ToDoList from "./factories/todoList.js";
import render from "./pages/render.js";

const add = document.querySelector(".add");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const done = document.querySelector(".done");

export const todolist = ToDoList();
export let click = "all";

add.addEventListener("click", (e) => {
	e.preventDefault();
	const value = input.value;
	if (value) {
		const todo = Todo(value);
		todolist.pushToLocalStorage(todo.getToDo());
	}
	input.value = "";
	render();
});

clear.addEventListener("click", () => {
	todolist.clearLocalStorage();
	render();
});

all.addEventListener("click", () => {
	click = "all";
	render();
});

active.addEventListener("click", () => {
	click = "active";
	render();
});

done.addEventListener("click", () => {
	click = "done";
	render();
});

render();
