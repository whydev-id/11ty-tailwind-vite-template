import { lock, unlock } from "tua-body-scroll-lock";

// define DOM stucture
const footer = document.getElementById("footer");
const content = document.getElementById("content");
const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("mainMenu");
let isActiveMenu = menu.classList.contains("ws-menu_isActive");

// function to handle focus trap using inert attribute when menu is open
function setFocusTrap(value) {
	if (value) {
		footer.setAttribute("inert", true);
		content.setAttribute("inert", true);
	} else {
		footer.removeAttribute("inert");
		content.removeAttribute("inert");
	}
}

// show / hide main menu
function mainMenu() {
	isActiveMenu = menu.classList.toggle("ws-menu_isActive");
	toggleMenu.classList.toggle("ws-header-toggle_isActive");

	// lock body & set focus trap on menu if active
	if (isActiveMenu) {
		lock(menu);
		setFocusTrap(true);
	} else {
		unlock(menu);
		setFocusTrap(false);
	}
}

// handle toggle menu
function triggerMenu() {
	toggleMenu.addEventListener("click", () => {
		mainMenu();
	});

	document.addEventListener("keyup", (e) => {
		const key = e.key;
		if (key === "Escape" && isActiveMenu) {
			mainMenu();
		}
	});
}

export default function () {
	triggerMenu();
}
