// Refactor the code
import data from "./data.js";

const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let items = "list of items";
let index = 0;
const median = Math.ceil(data.length / 2);
let pause = false;

function initialrender() {
	data.forEach((element, i) => {
		const div = document.createElement("div");
		const img = document.createElement("img");
		div.classList.add("item");
		div.style.left = `${(i + 1 - median) * 100}%`;
		img.src = element.image;
		img.classList.add("image");
		img.draggable = false;
		div.appendChild(img);
		slider.appendChild(div);
	});
	items = document.querySelectorAll(".item");
}

function slide() {
	items.forEach((item) => {
		item.style.transform = `translateX(${-index * 100}%)`;
	});
}
function nextClick() {
	index++;
	if (index > Math.floor(items.length / 2)) {
		index = -Math.floor(items.length / 2);
	}
	slide();
}
function prevClick() {
	index--;
	console.log(index);
	if (index < -Math.floor(items.length / 2)) {
		index = Math.floor(items.length / 2);
	}
	slide();
}

next.addEventListener("click", nextClick);
prev.addEventListener("click", prevClick);
document.addEventListener("keydown", (e) => {
	if (e.key == "ArrowRight") {
		nextClick();
	} else if (e.key == "ArrowLeft") {
		prevClick();
	} else if (e.key == "ArrowUp") {
		nextClick();
	} else if (e.key == "ArrowDown") {
		prevClick();
	}
});

// slider.addEventListener("click", () => {
// 	pause = !pause;
// 	pause ? clearInterval(myInterval) : null;
// });

// const myInterval = setInterval(() => {
// 	nextClick();
// }, 2000);

initialrender();
