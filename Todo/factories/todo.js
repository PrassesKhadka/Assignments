function Todo(value) {
	const id = Date.now();
	const title = value;
	let active = true;

	function getToDo() {
		return { id, title, active };
	}

	return { getToDo };
}

export default Todo;
