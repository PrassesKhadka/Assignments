import Todo from "./factories/todo.js";
import ToDoList from "./factories/todoList.js";
import activeRender from "./pages/active-render.js";
import doneRender from "./pages/done-render.js";
import render from "./pages/render.js";

const add = document.querySelector(".add");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const done = document.querySelector(".done");

export const todolist = ToDoList();

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
	render();
});

active.addEventListener("click", () => {
	activeRender();
});

done.addEventListener("click", () => {
	doneRender();
});

render();
