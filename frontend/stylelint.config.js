module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  printConfig: true, // Print the resolved config to stdout.
  rules: {
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates'],
      },
    ],
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
  },
};