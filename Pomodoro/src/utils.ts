// Not related to main logic

const nav_btns = document.querySelectorAll(".nav");
const rm_modal = document.querySelector(".rm-modal");
const modal = document.querySelector(".modal");

function utils() {
	// Adding active classes to the navigation buttons
	nav_btns.forEach((element) => {
		element.addEventListener("click", () => {
			const current = document.querySelector(".active");
			current?.classList.remove("active");
			element.classList.add("active");
		});
	});

	// removing modal onClick
	rm_modal?.addEventListener("click", () => {
		modal?.classList.add("hide");
	});
}

export default utils;
