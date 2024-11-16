require("dotenv").config();
const moment = require("moment");
const pluginDrafts = require("./plugin/.eleventy.config.drafts.js");
const htmlMinify = require("./plugin/.eleventy.config.htmlminify.js");
const pluginImages = require("./plugin/.eleventy.config.images.js");
const viteConfig = require("./plugin/.eleventy.config.vite.js");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	// Copying files manually
	eleventyConfig.addPassthroughCopy("src/assets"); // this line required for development process
	eleventyConfig.addPassthroughCopy("src/favicon.ico");

	// Custom filter
	eleventyConfig.addFilter("convertDate", function (value, format) {
		let currentDate = new Date(value);
		moment.locale("en");
		return moment(currentDate).format(format);
	});

	// Plugins config
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(htmlMinify);
	eleventyConfig.addPlugin(pluginImages);
	eleventyConfig.addPlugin(viteConfig);
	eleventyConfig.addPlugin(syntaxHighlight);

	// Asset Watch Targets
	eleventyConfig.addWatchTarget("./src/assets");

	// Base config
	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
			layouts: "_includes/_layouts",
			data: "_data",
		},
		templateFormats: ["md", "njk"],
		passthroughFileCopy: true,
		htmlTemplateEngine: "njk",
	};
};
