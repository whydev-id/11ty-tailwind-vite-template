export default function () {
	const body = document.body;
	const triggerButton = document.getElementById("toggleTheme");
	const iconTheme = document.querySelectorAll(".ws-header-theme")[0];
	const storedTheme = localStorage.getItem("theme");

	// if has stored theme, then set data-theme with current theme or light as default
	if (storedTheme) {
		body.setAttribute("data-theme", storedTheme);
		storedTheme == "light"
			? iconTheme.classList.remove("dark-mode-on")
			: iconTheme.classList.add("dark-mode-on");
	} else {
		body.setAttribute("data-theme", "light");
	}

	// trigger button, to set them with current value
	triggerButton.addEventListener("click", () => {
		// get current theme, set light as defult
		const currentTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
		body.setAttribute("data-theme", currentTheme);

		// toggle attribute theme
		iconTheme.classList.toggle("dark-mode-on", currentTheme === "dark");

		// set to local storage
		localStorage.setItem("theme", currentTheme);
	});
}
