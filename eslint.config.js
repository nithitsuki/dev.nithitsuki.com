// eslint.config.js
import { defineConfig } from "eslint/config";

// Example of global ignores
export default defineConfig([
    {
      ignores: [
        ".config/",
        "dist/", 
        "node_modules/",
        ".git/",
        "public/",
        ".next/",
        "out/",
        "build/",
        "src/",
        ".vscode/",
        "coverage/",
        "tsconfig.json"
      ] // acts as global ignores, due to the absence of other properties
    },
]);