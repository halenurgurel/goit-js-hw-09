import { defineConfig } from "vite";

export default defineConfig({
  define: {
    global: "globalThis",
  },
  server: {
    open: true,
  },
});
