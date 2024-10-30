import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [solidPlugin()],
	css: {
		modules: {
			localsConvention: "camelCase", // Optional, allows camelCase in CSS modules
		},
	},
	server: {
		port: 3000,
		host: "127.0.0.1"
	},
	build: {
		target: "esnext",
		outDir: "build",
	},
	publicDir: "public",
});
