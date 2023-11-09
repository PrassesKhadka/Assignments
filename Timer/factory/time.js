function Time(min, sec) {
	const time = {
		min,
		sec,
	};

	function getTime() {
		return time;
	}

	return { getTime };
}

export default Time;
