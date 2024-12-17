import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [
      ".now/*",
      "*.css",
      ".changeset",
      "dist",
      "esm/*",
      "public/*",
      "tests/*",
      "scripts/*",
      "*.config.js",
      ".DS_Store",
      "node_modules",
      "coverage",
      ".next",
      "build",
      "!.commitlintrc.cjs",
      "!.lintstagedrc.cjs",
      "!jest.config.js",
      "!plopfile.js",
      "!react-shim.js",
      "!tsup.config.ts"
    ]
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      "@next/next/google-font-display": "error"  // arba "warn" jei norite švelnesnio įspėjimo
    }
  }
];