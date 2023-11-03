function ToDoList() {
	const toDoList = JSON.parse(localStorage.getItem("todo")) || [];

	function pushToLocalStorage(todo) {
		toDoList.push(todo);
		localStorage.setItem("todo", JSON.stringify(toDoList));
	}

	return { pushToLocalStorage };
}

export default ToDoList;
