import Time from "./time.js";

function Timer(value) {
	// datas:

	let play = false;
	const timer = document.querySelector("#timer");
	let myInterval;

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

	function mount() {
		timer.textContent = `${value.min}:${value.sec}`;
	}

	myInterval = setInterval(() => {
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

	return { mount };
}

export default Timer;
