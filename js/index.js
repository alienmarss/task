const dropMenuEl = document.querySelector(".drop-down-menu-dots");
const headerEl = document.querySelector(".header");

dropMenuEl.addEventListener("click", function () {
	headerEl.classList.toggle("drop-open");
});
