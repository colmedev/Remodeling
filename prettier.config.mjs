/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-astro", "@ianvs/prettier-plugin-sort-imports"],
  arrowParens: "always",
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  plugins: ["prettier-plugin-astro", "@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@components/(.*)$",
    "^@content/(.*)$",
    "^@layouts/(.*)$",
    "^@pages/(.*)$",
    "^@data/(.*)$",
    "^@styles/(.*)$",
    "^@/(.*)$",
    "^.[./].*",
    "",
  ],
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/prettier.md
 */