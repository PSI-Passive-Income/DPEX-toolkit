module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".d.ts"],
      },
    },
    "import/extensions": [".js", ".ts", ".jsx", ".tsx", ".d.ts"],
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    // Typescript
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    // React
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-multi-comp": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
