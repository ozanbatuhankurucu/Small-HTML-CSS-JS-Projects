module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', 'tsx']
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-console': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/require-default-props': 'off',
    'implicit-arrow-linebreak': 'off',
    multiline: 'off',
    quotes: 'off',
    'function-paren-newline': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    indent: 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-array-index-key': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'consistent-return': 'off',
    'max-len': 'off'
  }
}
