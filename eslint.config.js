export default [
    {
      files: ["**/*.js", "**/*.jsx"], 
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: {
          window: "readonly",
          document: "readonly",
          console: "readonly",
        },
      },
      rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
      },
    },
  ];
  