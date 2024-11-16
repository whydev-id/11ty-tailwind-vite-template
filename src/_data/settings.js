const currentYear = new Date().getFullYear();

const settings = {
	title: "John Doe - Homepage",
	description: "Personal website with 11ty engine",
	url: "http://localhost:8080", // change with your domain
	theme_color: "#2f4858",
	currentYear,
};

module.exports = settings;
