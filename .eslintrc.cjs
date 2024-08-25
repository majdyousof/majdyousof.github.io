module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier' // Ensure this is last to override other configs
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error'
    }
  };