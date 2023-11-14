import Long from "./factories/time/Long";
import Pomodoro from "./factories/time/Pomodoro";
import Short from "./factories/time/Short";
import Timer from "./factories/timer";

// DOM elements selected
const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const pomodoro_btn = document.querySelector(".pomodoro");
const short_btn = document.querySelector(".short");
const long_btn = document.querySelector(".long");
const nav_btns = document.querySelectorAll(".nav");

// Different timers
const pomodoro = Pomodoro();
const pomodoroTimer = Timer(pomodoro.getTime());
const short = Short();
const shortTimer = Timer(short.getTime());
const long = Long();
const longTimer = Timer(long.getTime());

// data
type Tactive = "pomodoro" | "short" | "long";
let active: Tactive = "pomodoro";

// Main Functions
function initialRender() {
	if (timer) {
		active === "pomodoro"
			? (timer.textContent = `${pomodoro.getTime().minute}:0${
					pomodoro.getTime().second
			  }`)
			: active === "short"
			? (timer.textContent = `0${short.getTime().minute}:0${
					short.getTime().second
			  }`)
			: (timer.textContent = `${long.getTime().minute}:0${
					long.getTime().second
			  }`);
	}
}

pomodoro_btn?.addEventListener("click", () => {
	active = "pomodoro";
	// all async tiimers should be stopped as async action takes place in background and mounts the DOM every sec
	pomodoroTimer.stop();
	shortTimer.stop();
	longTimer.stop();
	initialRender();
});

short_btn?.addEventListener("click", () => {
	active = "short";
	pomodoroTimer.stop();
	shortTimer.stop();
	longTimer.stop();
	initialRender();
});

long_btn?.addEventListener("click", () => {
	active = "long";
	pomodoroTimer.stop();
	shortTimer.stop();
	longTimer.stop();
	initialRender();
});

start?.addEventListener("click", () => {
	active === "pomodoro"
		? pomodoroTimer.start()
		: active === "long"
		? longTimer.start()
		: shortTimer.start();
});

reset?.addEventListener("click", () => {
	active === "pomodoro"
		? pomodoroTimer.reset()
		: active === "long"
		? longTimer.reset()
		: shortTimer.reset();
});

// Adding active classes to the navigation buttons
nav_btns.forEach((element) => {
	element.addEventListener("click", () => {
		const current = document.querySelector(".active");
		current?.classList.remove("active");
		element.classList.add("active");
	});
});

initialRender();
