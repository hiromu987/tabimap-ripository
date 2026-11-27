import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";//reactの使用宣言
import tailwindcss from "@tailwindcss/vite";//tailwindcssの使用宣言

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
