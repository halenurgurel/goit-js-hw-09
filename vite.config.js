import { defineConfig } from "vite";

export default defineConfig({
  define: {
    global: "globalThis",
  },
  server: {
    open: true,
  },
  base: "/goit-js-hw-09/",
});
