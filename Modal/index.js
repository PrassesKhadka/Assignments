const modal = document.getElementById("myModal");
const modal_content = document.querySelector(".modal-content");
const btn = document.getElementById("myBtn");
const close = document.getElementById("close");

btn.onclick = function () {
	modal.style.transform = `translateY(100%)`;
	modal.style.background = `rgba(0,0,0,0.4)`;
	modal.style.backdropFilter = `blur(8px)`;
};

close.onclick = function () {
	modal.style.transform = `translateY(-100%)`;
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.transform = `translateY(-100%)`;
	}
};
