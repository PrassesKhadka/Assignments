// Only a single instance created

function ToDoList() {
	let toDoList = JSON.parse(localStorage.getItem("todo")) || [];

	function pushToLocalStorage(todo) {
		toDoList.push(todo);
		localStorage.setItem("todo", JSON.stringify(toDoList));
		return true;
	}

	function removeFromLocalStorage(id) {
		toDoList = toDoList.filter((value) => value.id !== id);
		localStorage.setItem("todo", JSON.stringify(toDoList));
		return true;
	}

	function clearLocalStorage() {
		toDoList.length = 0;
		localStorage.setItem("todo", JSON.stringify(toDoList));
		return true;
	}

	function toggleStatus(id) {
		toDoList = toDoList.map((element) => {
			if (element.id === id) {
				return { ...element, active: !element.active };
			}
			return element;
		});
		localStorage.setItem("todo", JSON.stringify(toDoList));
		return true;
	}

	// function edit(id, value) {
	// 	toDoList = toDoList.map((element) => {
	// 		if (element.id === id) {
	// 			return { ...element, title: value };
	// 		}
	// 		return element;
	// 	});
	// 	localStorage.setItem("todo", JSON.stringify(toDoList));
	// 	return true;
	// }

	return {
		pushToLocalStorage,
		removeFromLocalStorage,
		clearLocalStorage,
		toggleStatus,
	};
}

export default ToDoList;
