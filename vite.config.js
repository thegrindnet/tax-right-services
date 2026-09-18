import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tax-right-services",
  servor: {
    port: 3000,
  },
});
