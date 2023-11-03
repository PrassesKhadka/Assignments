import Todo from "./factories/todo.js";
import ToDoList from "./factories/todoList.js";
import render from "./factories/render.js";

const add = document.querySelector(".add");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear");
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

render();
