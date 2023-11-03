import Todo from "./factories/todo.js";
import ToDoList from "./factories/todoList.js";
import render from "./factories/render.js";

const add = document.querySelector(".add");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear");
const remove = document.querySelector(".remove");
let value = "";
const todolist = ToDoList();

add.addEventListener("click", (e) => {
	e.preventDefault();
	if (value) {
		const todo = Todo(value);
		console.log(todo.getToDo());
		todolist.pushToLocalStorage(todo.getToDo());
	}
	render();
});

input.addEventListener("change", (e) => {
	value = e.target.value;
	e.target.value = "";
});

clear.addEventListener("click", () => {
	localStorage.removeItem("todo");
	render();
});

render();
