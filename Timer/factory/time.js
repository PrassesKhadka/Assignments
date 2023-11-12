function Time(min, sec) {
	// private data
	const time = {
		min,
		sec,
	};

	if (time.sec > 60) {
		time.min += Math.floor(time.sec / 60);
		time.sec = time.sec % 60;
	}

	// function declarations
	function getTime() {
		return time;
	}

	return { getTime };
}

export default Time;
