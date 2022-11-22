module.exports = {
  // parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 6, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'airbnb',
    'react-app',
    'react-app/jest',
    'prettier',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'airbnb/hooks'
    // 'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-console": 0,
    'semi': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     parser: 'flow',
    //   },
    // ],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  env: { es6: true },
};
