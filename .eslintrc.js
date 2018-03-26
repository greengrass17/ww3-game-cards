module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      "ecmaVersion": 8,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true
      },
      "sourceType": "module"
    },
    "plugins": [
    ],
    "rules": {
      "accessor-pairs": "error",
      "array-bracket-spacing": [
        "error",
        "never"
      ],
      "array-callback-return": "error",
      "arrow-spacing": "error",
      "block-scoped-var": "error",
      "block-spacing": "error",
      "brace-style": [
        "error",
        "1tbs"
      ],
      "callback-return": "off",
      "camelcase": [
        "error",
        {
          "properties": "never"
        }
      ],
      "capitalized-comments": "off",
      "comma-dangle": "off",
      "comma-spacing": [
        "error",
        {
          "after": true,
          "before": false
        }
      ],
      "comma-style": [
        "error",
        "last"
      ],
      "complexity": "off",
      "computed-property-spacing": [
        "error",
        "never"
      ],
      "consistent-return": "off",
      "consistent-this": "off",
      "curly": "error",
      "default-case": "off",
      "dot-location": [
        "error",
        "property"
      ],
      "dot-notation": [
        "error",
        {
          "allowKeywords": true
        }
      ],
      "eol-last": "off",
      "eqeqeq": "error",
      "func-call-spacing": "error",
      "func-name-matching": "error",
      "func-names": [
        "error",
        "never"
      ],
      "func-style": "off",
      "generator-star-spacing": "error",
      "global-require": "error",
      "guard-for-in": "error",
      "handle-callback-err": "error",
      "id-blacklist": "error",
      "id-length": "off",
      "id-match": "error",
      "indent": "off",
      "init-declarations": "off",
      "jsx-quotes": "error",
      "key-spacing": "off",
      "keyword-spacing": [
        "error",
        {
          "after": true,
          "before": true
        }
      ],
      "line-comment-position": "off",
      "linebreak-style": [
        "error",
        "unix"
      ],
      "lines-around-comment": "off",
      "lines-around-directive": "error",
      "max-depth": "error",
      "max-len": "off",
      "max-lines": "off",
      "max-nested-callbacks": "off",
      "max-params": "off",
      "max-statements": "off",
      "max-statements-per-line": "error",
      "multiline-ternary": "off",
      "new-parens": "error",
      "newline-after-var": "off",
      "newline-before-return": "off",
      "newline-per-chained-call": "off",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-catch-shadow": "error",
      "no-compare-neg-zero": "error",
      "no-confusing-arrow": "error",
      "no-console": "off",
      "no-continue": "off",
      "no-div-regex": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "off",
      "no-empty-function": "off",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-extra-parens": "off",
      "no-floating-decimal": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-inline-comments": "off",
      "no-inner-declarations": [
        "error",
        "functions"
      ],
      "no-invalid-this": "off",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "off",
      "no-lonely-if": "off",
      "no-loop-func": "error",
      "no-magic-numbers": "off",
      "no-mixed-operators": "off",
      "no-mixed-requires": "error",
      "no-multi-assign": "off",
      "no-multi-spaces": "off",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "error",
      "no-native-reassign": "error",
      "no-negated-condition": "off",
      "no-negated-in-lhs": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-object": "error",
      "no-new-require": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "off",
      "no-path-concat": "error",
      "no-plusplus": "off",
      "no-process-env": "error",
      "no-process-exit": "error",
      "no-proto": "error",
      "no-prototype-builtins": "error",
      "no-restricted-globals": "error",
      "no-restricted-imports": "error",
      "no-restricted-modules": "error",
      "no-restricted-properties": "error",
      "no-restricted-syntax": "error",
      "no-return-assign": "error",
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow": "off",
      "no-shadow-restricted-names": "error",
      "no-spaced-func": "error",
      "no-sync": "off",
      "no-tabs": "error",
      "no-template-curly-in-string": "error",
      "no-ternary": "off",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-undefined": "off",
      "no-underscore-dangle": "off",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": [
        "error",
        {
          "defaultAssignment": true
        }
      ],
      "no-unused-expressions": "error",
      "no-use-before-define": "off",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "off",
      "no-useless-constructor": "error",
      "no-useless-escape": "off",
      "no-useless-rename": "error",
      "no-useless-return": "off",
      "no-var": "off",
      "no-void": "error",
      "no-warning-comments": "off",
      "no-whitespace-before-property": "error",
      "no-with": "error",
      "nonblock-statement-body-position": "error",
      "object-curly-newline": "off",
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "object-property-newline": "error",
      "object-shorthand": "off",
      "one-var": "off",
      "one-var-declaration-per-line": "error",
      "operator-assignment": "off",
      "operator-linebreak": [
        "error",
        "after"
      ],
      "padded-blocks": "off",
      "prefer-arrow-callback": "off",
      "prefer-const": "off",
      "prefer-destructuring": [
        "error",
        {
          "array": false,
          "object": false
        }
      ],
      "prefer-numeric-literals": "error",
      "prefer-reflect": "off",
      "prefer-rest-params": "off",
      "prefer-spread": "error",
      "prefer-template": "off",
      "quote-props": "off",
      "quotes": "off",
      "radix": "off",
      "require-await": "error",
      "require-jsdoc": "off",
      "rest-spread-spacing": "error",
      "semi": ["error", "always"],
      "semi-spacing": [
        "error",
        {
          "after": true,
          "before": false
        }
      ],
      "sort-imports": "off",
      "sort-keys": "off",
      "sort-vars": "off",
      "space-before-blocks": "error",
      "space-before-function-paren": "off",
      "space-in-parens": [
        "error",
        "never"
      ],
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": [
        "error",
        "always"
      ],
      "strict": "off",
      "symbol-description": "error",
      "template-curly-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": [
        "error",
        "never"
      ],
      "valid-jsdoc": "error",
      "vars-on-top": "off",
      "wrap-iife": "error",
      "wrap-regex": "off",
      "yield-star-spacing": "error",
      "yoda": [
        "error",
        "never"
      ]
    }
  };
  