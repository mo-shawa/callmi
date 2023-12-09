/**
 * @type {import('prettier').Options}
 */

module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
}
