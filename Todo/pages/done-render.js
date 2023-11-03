import { todolist } from "../index.js";

function doneRender() {
	const data = JSON.parse(localStorage.getItem("todo"));

	const list = document.querySelector(".list");
	list.innerHTML = "";
	data.forEach((element) => {
		if (!element.active) {
			const li = document.createElement("li");
			const h2 = document.createElement("h2");
			li.className = "list-item";
			h2.textContent = element.title;
			li.appendChild(h2);

			const removeButton = document.createElement("button");
			removeButton.textContent = "🗑️";
			removeButton.className = "remove";
			removeButton.addEventListener("click", () => {
				todolist.removeFromLocalStorage(element.id);
				doneRender();
			});

			const completeButton = document.createElement("button");
			completeButton.addEventListener("click", () => {
				todolist.toggleStatus(element.id);
				doneRender();
			});
			completeButton.textContent = element.active ? "❌" : "✅";

			const div = document.createElement("div");
			div.append(removeButton, completeButton);
			li.appendChild(div);
			list.appendChild(li);
		}
	});
}

export default doneRender;
