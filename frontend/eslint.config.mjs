// eslint.config.mjs
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"], // Include TypeScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: eslintParser, // Use TypeScript parser
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"], // Include JavaScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
