import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    ignores: ['**/*.gen.ts'],
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
  {
    rules: {
      'react/prefer-destructuring-assignment': ['off'],
      'react-dom/no-missing-button-type': ['off'],
      'react-refresh/only-export-components': ['off'],
      'unicorn/prefer-includes': ['off'],
    },
  },
)
