import Time from "./factory/time.js";
import Timer from "./factory/timer.js";

const timer = document.querySelectorAll("[data-time]");
const play = document.querySelector("#play");
let minute = 0;
let second = 0;

const clickHandler = (e) => {
	const element = e.target;

	// Creating an input field
	const input = document.createElement("input");
	input.style.width = `7rem`;
	input.style.height = `100%`;
	input.style.textAlign = `center`;
	input.style.background = `transparent`;
	input.style.color = `white`;

	input.addEventListener("change", () => {
		if (e.target.id === "minute") {
			minute = input.value;
		} else {
			second = input.value;
		}
	});

	element.innerHTML = "";
	element.appendChild(input);
	element.removeEventListener("click", clickHandler);
};
timer.forEach((element) => element.addEventListener("click", clickHandler));

const handlePlay = () => {
	const value = Time(minute, second);
	Timer(value.getTime());
	play.removeEventListener("click", handlePlay);
};
play.addEventListener("click", handlePlay);
