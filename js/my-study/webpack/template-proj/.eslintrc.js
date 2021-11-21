module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 4],
    "no-unused-vars": "off",
    'import/no-absolute-path': "off"
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
      "react"
  ],
  root: true
}
