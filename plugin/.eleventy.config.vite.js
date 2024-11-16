const viteCompression = require("vite-plugin-compression");
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(EleventyVitePlugin, {
		viteOptions: {
			build: {
				mode: "production",
				assetsInlineLimit: 0,
				rollupOptions: {
					output: {
						entryFileNames: "assets/main.js",
						chunkFileNames: "assets/[name].js",
						manualChunks: undefined,
						assetFileNames: ({ name }) => {
							if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
								return "assets/images/[name][extname]";
							}

							if (/\.(ttf|woff|woff2|eot)$/.test(name ?? "")) {
								return "assets/fonts/[name][extname]";
							}

							return "assets/[name][extname]";
						},
					},
				},
			},
			esbuild: { legalComments: "none" },
			plugins: [
				viteCompression({ algorithm: "gzip", ext: ".gz" }),
				viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
			],
		},
	});
};
