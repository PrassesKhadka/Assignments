import Todo from "./todo.js";
import ToDoList from "./todoList.js";

function render() {
	const data = JSON.parse(localStorage.getItem("todo"));
	console.log(data);
	const list = document.querySelector(".list");
	list.innerHTML = "";
	data.forEach((element, i) => {
		const li = document.createElement("li");
		li.textContent = element.title;

		const removeButton = document.createElement("button");
		removeButton.textContent = "❌";
		removeButton.className = "remove";
		removeButton.addEventListener("click", () => {
			data.splice(i, 1);
			localStorage.setItem("todo", JSON.stringify(data));
			render();
		});

		li.appendChild(removeButton);

		list.appendChild(li);
	});
}
export default render;
