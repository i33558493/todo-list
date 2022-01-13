module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true,
    'commonjs': true,
    'shared-node-browser': false,
    'worker': false,
    'amd': true,
    'mocha': false,
    'jasmine': false,
    'jest': true,
    'phantomjs': false,
    'qunit': false,
    'prototypejs': false,
    'shelljs': false,
    'meteor': false,
    'mongo': false,
    'protractor': false,
    'applescript': false,
    'nashorn': false,
    'serviceworker': false,
    'atomtest': false,
    'embertest': false,
    'webextensions': false,
    'es6': true,
    'greasemonkey': false
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'CallExpression[callee.object.name="console"][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        'message': 'Unexpected property on console object was called'
      }
    ],
    'no-mixed-operators': 'off',
    'no-tabs': 'off',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'semi': [
      'error',
      'never',
      {
        'beforeStatementContinuationChars': 'never'
      }
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'never',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }
    ],
    'no-delete-var': 'error',
    'prefer-const': [
      'error',
      {
        'ignoreReadBeforeAssign': false
      }
    ],
    'quote-props': [
      'error',
      'consistent'
    ],
    'vue/name-property-casing': [
      'error',
      'PascalCase'
    ],
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/no-parsing-error': 'off',
    'vue/require-v-for-key': 'error',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        'allowUsingIterationVar': true
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        'singleline': 6,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
