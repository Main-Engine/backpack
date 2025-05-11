module.exports = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  tabWidth: 2,
  printWidth: 100,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^node:',
    '^use node$',
    '<THIRD_PARTY_MODULES>',
    '^models/(.*)$',
    '^pages/(.*)$',
    '^common/(.*)$',
    '^partials/(.*)$',
    '^pages/(.*)$',
    '^styles/(.*)$',
    '^contexts/(.*)$',
    '^constants/(.*)$',
    '^hooks/(.*)$',
    '^api/(.*)$',
    '^api',
    '^utils/(.*)$',
    '^[./]'
  ],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderParserPlugins: ['typescript', 'decorators-legacy', 'importAssertions'],
  importOrderSeparation: true,
  overrides: [
    {
      files: ['**/package.json', '**/locales/**/*.json', '.github/**/*.yml'],
      options: {
        useTabs: false,
        tabWidth: 2
      }
    }
  ]
}
