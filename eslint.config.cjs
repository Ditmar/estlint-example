const js = require("@eslint/js");
const astro = require("eslint-plugin-astro");
const tsParser = require("@typescript-eslint/parser");
const ts = require("@typescript-eslint/eslint-plugin");
const prettier = require("eslint-config-prettier");

module.exports = [
    { ignores: ["dist/", ".astro/", "node_modules/", "eslint.config.cjs"] },
    js.configs.recommended,
    ...ts.configs["flat/recommended"],
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: { ecmaVersion: "latest", sourceType: "module" },
        },
        plugins: { "@typescript-eslint": ts },
        rules: {
        },
    },
    ...astro.configs["flat/recommended"],
    prettier,
];
