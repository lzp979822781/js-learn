module.exports = {
    env: {
      	browser: true,
      	es2021: true
    },
    extends: [
      	'standard'
    ],
    parserOptions: {
      	ecmaVersion: 12
    },
    rules: {
        semi: ["error", "always"],
        indent: ['error', 4]
    }
}
