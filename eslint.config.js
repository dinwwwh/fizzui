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
  {
    files: ['packages/styles/src/**/*.css.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        name: '@vanilla-extract/recipes',
        importNames: ['recipe'],
        message: 'Please use the `recipe` function from `@styles/lib` instead.',
      }, {
        name: '@vanilla-extract/css',
        importNames: ['style'],
        message: 'Please use the `style` function from `@styles/lib` instead.',
      }],
    },
  },
)
