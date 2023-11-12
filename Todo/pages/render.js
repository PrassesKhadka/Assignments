// The main page-All todos rendered

import { todolist } from "../index.js";
import { click } from "../index.js";

function render() {
	const data = JSON.parse(localStorage.getItem("todo"));
	const list = document.querySelector(".list");
	let dataCopy = data;
	list.innerHTML = "";

	click === "active"
		? (dataCopy = data.filter((value) => value.active))
		: click === "done"
		? (dataCopy = data.filter((value) => !value.active))
		: dataCopy;

	dataCopy.forEach((element) => {
		const li = document.createElement("li");
		const h2 = document.createElement("h2");
		li.className = "list-item";

		h2.textContent = element.title;
		if (!element.active) {
			h2.className = "strike";
		} else {
			h2.className = "";
		}
		li.appendChild(h2);

		const removeButton = document.createElement("button");
		removeButton.textContent = "🗑️";
		removeButton.style.cursor = "pointer";
		removeButton.className = "remove";
		removeButton.addEventListener("click", () => {
			todolist.removeFromLocalStorage(element.id);
			render();
		});

		const completeButton = document.createElement("button");
		completeButton.addEventListener("click", () => {
			todolist.toggleStatus(element.id);
			render();
		});
		completeButton.textContent = element.active ? "❌" : "✅";
		completeButton.style.cursor = "pointer";

		const div = document.createElement("div");
		div.append(removeButton, completeButton);
		li.appendChild(div);
		list.appendChild(li);
	});
}
export default render;
