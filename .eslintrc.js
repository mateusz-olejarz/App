'use strict'


module.exports = {
    extends: [ 'eslint:recommended' ],
    env: {
        browser: true,
        commonjs: true,
        jest: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
    },
    plugins: [ 'babel', 'react', '@typescript-eslint' ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.ts',
                    '.tsx'
                ]
            }
        }
    },
    rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'babel/semi': [ 'error', 'never' ],
        'comma-dangle': [ 'error', 'only-multiline' ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            }
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
            }
        ],
        quotes: [ 2, 'single' ],
        'react/jsx-no-bind': 'error',
        curly: 'warn'
    }
}
