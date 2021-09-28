import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      includeAssets: ["robots.txt"],
      manifest: {
        name: "Dev Portfolio | Adrian Zinko",
        short_name: "az-portfolio",
        description:
          "Dev Portfolio | Adrian Zinko - Personal developer portfolio website.",
        theme_color: "#ffffff",
      },
    }),
  ],
});
