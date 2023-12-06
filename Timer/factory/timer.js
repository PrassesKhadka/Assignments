function Timer(value) {
	// datas:

	const timer = document.querySelector("#timer");
	const play = document.querySelector("#play");

	// functions:

	function logic() {
		if (value.min > 0 || value.sec > 0) {
			if (value.sec === 0) {
				value.min -= 1;
				value.sec = 60;
			}
			value.sec--;
		} else {
			clearInterval(myInterval);
		}
	}

	function isSingleDigit(number) {
		return number >= 0 && number <= 9 ? true : false;
	}

	function mount() {
		timer.textContent =
			isSingleDigit(value.min) && isSingleDigit(value.sec)
				? `0${value.min}: 0${value.sec}`
				: isSingleDigit(value.min)
				? `0${value.min}: ${value.sec}`
				: isSingleDigit(value.sec)
				? `${value.min}: 0${value.sec}`
				: `${value.min}: ${value.sec}`;
	}

	let myInterval = setInterval(() => {
		logic();
		mount();
	}, 1000);
	
	// function togglePlay() {
	// 	play = !play;
	// 	if (play) {
	// 		run();
	// 	} else {
	// 		clearInterval(myInterval);
	// 	}
	// }
}

export default Timer;
