import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Vite config: React plugin enables Fast Refresh and JSX. Build output goes to dist/. */
export default defineConfig({
  plugins: [react()],
});
