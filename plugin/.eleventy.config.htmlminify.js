const htmlmin = require("html-minifier");
const isProduction = process.env.ENVIRONMENT === "production";

module.exports = (eleventyConfig) => {
	// Template HTML processing minify all html files
	const shouldTransformHTML = (outputPath) =>
		outputPath && outputPath.endsWith(".html") && isProduction;

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		if (shouldTransformHTML(outputPath)) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				processScripts: "text/html, application/ld+json",
			});
			return minified;
		}
		return content;
	});
};
