import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
const config = {
  languageOptions: { globals: globals.node },
  ...pluginJs.configs.recommended,
};

export default config;