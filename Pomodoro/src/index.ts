import Time from "./factories/time";
import Timer from "./factories/timer";
import utils from "./utils";
import Customise_Theme from "./factories/customise-theme";

// DOM elements selected
const start = document.querySelector(".start") as HTMLElement;
const reset = document.querySelector(".reset") as HTMLElement;
const pomodoro_btn = document.querySelector(".pomodoro") as HTMLElement;
const short_btn = document.querySelector(".short") as HTMLElement;
const long_btn = document.querySelector(".long") as HTMLElement;
const setting = document.querySelector(".setting") as HTMLElement;
const pop_up = document.querySelector(".pop-up") as HTMLElement;
const pop_up_container = document.querySelector(".container") as HTMLElement;
const remove_pop_up = document.querySelector(".rm-pop_up") as HTMLElement;
const theme_select = document.getElementById(
	"theme-select"
) as HTMLSelectElement;
const pomodoro_select = document.getElementById(
	"pomodoro-select"
) as HTMLInputElement;
const short_select = document.getElementById(
	"short-select"
) as HTMLInputElement;
const long_select = document.getElementById("long-select") as HTMLInputElement;

// Different timers:Default
let pomodoro = Time(25);
let pomodoroTimer = Timer(pomodoro.getTime());
let short = Time(5);
let shortTimer = Timer(short.getTime());
let long = Time(10);
let longTimer = Timer(long.getTime());

// data for toggling between pomodoro,short break and long break
type Tactive = "pomodoro" | "short" | "long";
let active: Tactive = "pomodoro";

// Main Functions
function initialRender() {
	active === "pomodoro"
		? pomodoroTimer.render()
		: active === "short"
		? shortTimer.render()
		: longTimer.render();
}

export const handlePomodoroClick = () => {
	active = "pomodoro";
	// all async timers should be stopped as async action takes place in background and mounts the DOM every sec
	pomodoroTimer.stop();
	shortTimer.stop();
	longTimer.stop();
	initialRender();
	start.textContent = "start";
};
export const handleShortClick = () => {
	active = "short";
	pomodoroTimer.stop();
	shortTimer.stop();
	longTimer.stop();
	initialRender();
	start.textContent = "start";
};
export const handleLongClick = () => {
	active = "long";
	pomodoroTimer.stop();
	shortTimer.stop();
	longTimer.stop();
	initialRender();
	start.textContent = "start";
};

export const handleStartClick = () => {
	if (active === "pomodoro") {
		if (pomodoroTimer.getState()) {
			pomodoroTimer.stop();
			if (start) {
				start.textContent = "start";
			}
		} else {
			pomodoroTimer.start();
			if (start) {
				start.textContent = "pause";
			}
		}
	} else if (active === "long") {
		if (longTimer.getState()) {
			longTimer.stop();
			if (start) {
				start.textContent = "start";
			}
		} else {
			longTimer.start();
			if (start) {
				start.textContent = "pause";
			}
		}
	} else {
		if (shortTimer.getState()) {
			shortTimer.stop();
			if (start) {
				start.textContent = "start";
			}
		} else {
			shortTimer.start();
			if (start) {
				start.textContent = "pause";
			}
		}
	}
};

const handleResetClick = () => {
	active === "pomodoro"
		? pomodoroTimer.reset()
		: active === "long"
		? longTimer.reset()
		: shortTimer.reset();
};

const handleSettingClick = () => {
	pop_up.classList.add("transform");
};

const handleRemovePopUp = () => {
	pop_up.classList.remove("transform");
};

const handleCustomiseTheme = () => {
	// options returns an array of options
	const selectedOption = theme_select.options[theme_select.selectedIndex];
	const selectedValue = selectedOption.value;
	const theme = Customise_Theme();
	theme.setTheme(selectedValue);
};

const handleTimerValueChange = () => {
	pomodoroTimer.stop();
	shortTimer.stop();
	longTimer.stop();
	pomodoro = Time(pomodoro_select.valueAsNumber);
	pomodoroTimer = Timer(pomodoro.getTime());
	short = Time(short_select.valueAsNumber);
	shortTimer = Timer(short.getTime());
	long = Time(long_select.valueAsNumber);
	longTimer = Timer(long.getTime());
	initialRender();
};

pomodoro_btn?.addEventListener("click", handlePomodoroClick);
short_btn?.addEventListener("click", handleShortClick);
long_btn?.addEventListener("click", handleLongClick);
start?.addEventListener("click", handleStartClick);
reset?.addEventListener("click", handleResetClick);
setting?.addEventListener("click", handleSettingClick);
theme_select.addEventListener("change", handleCustomiseTheme);
remove_pop_up.addEventListener("click", handleRemovePopUp);
pomodoro_select.addEventListener("change", handleTimerValueChange);
short_select.addEventListener("change", handleTimerValueChange);
long_select.addEventListener("change", handleTimerValueChange);

initialRender();
utils();
