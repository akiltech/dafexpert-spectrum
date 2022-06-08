module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: ["prettier", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "max-len": 0,
    "no-alert": 0,
    "react/function-component-definition": 0,
    "implicit-arrow-linebreak": 0,
    "no-undef": 0,
    "no-shadow": 2,
    "no-console": ["warn", { "allow": ["error"] }],
    "no-plusplus": 0,
    "react/jsx-key": 2,
    "no-unused-vars": 2,
    "import/no-cycle": 0,
    "no-return-assign": 0,
    "react/prop-types": 0,
    "no-param-reassign": 0,
    "jest/valid-describe": 0,
    "object-curly-newline": 0,
    "no-underscore-dangle": 0,
    "react/button-has-type": 1,
    "react/no-children-prop": 0,
    "react/jsx-boolean-value": 0,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-wrap-multilines": 0,
    "react/require-default-props": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "react/no-unescaped-entities": 0,
    "comma-dangle": 0,
    "@typescript-eslint/no-shadow": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/naming-convention": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "import/no-extraneous-dependencies": 0,
    "object-curly-spacing": [1, "always"],
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ],
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }]
  }
};
