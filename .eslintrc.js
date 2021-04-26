module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "plugin:react/recommended",
    "airbnb-base",
    "airbnb/rules/react"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"],
          ["assets", "./src/assets"],
          ["configs", "./src/configs"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
}