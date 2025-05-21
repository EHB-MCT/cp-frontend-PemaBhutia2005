import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/cp-frontend-PemaBhutia2005/",
	server: {
		hmr: false,
		watch: {
			usePolling: true,
		},
		port: 3001,
	},
	esbuild: {
		sourcemap: false,
	},
});
