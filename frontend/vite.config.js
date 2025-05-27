import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access via your local network IP (e.g., 192.168.1.64)
    port: 5173, // Optional: specify port (default is 5173)
    allowedHosts: [
      "f663-2800-3c0-2090-1be5-e52c-598a-4283-432c.ngrok-free.app",
      "192.168.1.64",
    ],
  },
});
