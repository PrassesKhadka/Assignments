import data from "./data.js";

const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let items = "list of items";
let counter = 0;

function initialrender() {
	data.forEach((element, index) => {
		const div = document.createElement("div");
		const img = document.createElement("img");
		div.classList.add("item");
		div.style.left = `${index * 100}%`;
		img.src = element.image;
		img.classList.add("image");
		img.draggable = false;
		div.appendChild(img);
		slider.appendChild(div);
	});
	items = document.querySelectorAll(".item");
}

function slide() {
	items.forEach((item, index) => {
		item.style.transform = `translateX(-${counter * 100}%)`;
	});
}
function nextClick() {
	counter++;
	if (counter > items.length - 1) {
		counter = 0;
	}
	slide();
}
function prevClick() {
	counter--;
	if (counter < 0) {
		counter = items.length - 1;
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

initialrender();

// setInterval(() => {
// 	nextClick();
// }, 1000);
