import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fins/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
