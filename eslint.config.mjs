import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginCypress from "eslint-plugin-cypress";

export default [
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"] 
  },
  { 
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.jsx", "**/*.js"],
    plugins: { react: pluginReact },
    languageOptions: { globals: globals.browser },
    rules: {
      "react/jsx-key": "error",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-duplicate-props": "error",
      "react/self-closing-comp": "warn",
      "react/no-unknown-property": "error",
      "react/no-unused-state": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },
  {
    files: ["cypress/**/*.js"],
    plugins: { cypress: pluginCypress },
    languageOptions: { globals: globals.browser },
    rules: {
      "cypress/no-unnecessary-waiting": "warn",
      "cypress/assertion-before-screenshot": "error",
      "cypress/no-force": "error",
      "cypress/no-assigning-return-values": "error",
      "cypress/no-pause": "error"
    }
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    rules: {
      "jest/no-focused-tests": "error", 
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error",
      "jest/no-disabled-tests": "warn",
      "jest/prefer-to-have-length": "warn",
      "jest/prefer-expect-assertions": "warn"
    }
  }
];
