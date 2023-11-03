function Todo(value) {
	const id = Date.now();
	const title = value;
	let active = false;

	function getToDo() {
		return { id, title, active };
	}

	function toggleActive() {
		active = !active;
	}

	return { getToDo, toggleActive };
}

export default Todo;
