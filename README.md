[![Build Status](https://travis-ci.org/pelevesque/is-palindrome.svg?branch=master)](https://travis-ci.org/pelevesque/is-palindrome)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/is-palindrome/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/is-palindrome?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# is-palindrome

Checks if a string is a palindrome with a grouping feature not seen in other palindrome checkers.

## Node Repository

https://www.npmjs.com/package/@pelevesque/is-palindrome

## Installation

`npm install @pelevesque/is-palindrome`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### parameters

```js
str                    (required)
groupBy                (optional) default = 1
pivotMustBePalindromic (optional) default = false
```

### examples

```js
const isPalindrome = require('@pelevesque/is-palindrome')
```

```js
// works with traditional palindromes
isPalindrome('')      // false
isPalindrome('12345') // false
isPalindrome('a')     // true
isPalindrome('1221')  // true
isPalindrome('12321') // true
```

```js
// a groupBy parameter can be used to group elements
const groupBy = 2
isPalindrome('abba',  groupBy) // false
isPalindrome('abab',  groupBy) // true
isPalindrome('abcba', groupBy) // true

// pivots do not have to be palindromic by default
// they exist when a center point is smaller than groupBy * 2
const groupBy = 4
isPalindrome('abcd!@#$123!@#$abcd',   groupBy) // true
isPalindrome('abcd!@#$1234!@#$abcd',  groupBy) // true
isPalindrome('abcd!@#$12345!@#$abcd', groupBy) // true
isPalindrome('abcd!@#$12321!@#$abcd', groupBy) // true
```

```js
// the pivotMustBePalindromic flag can be used to force palindromic pivots
const groupBy = 4
const pivotMustBePalindromic = true
isPalindrome('abcd!@#$12345!@#$abcd', groupBy, pivotMustBePalindromic) // false
isPalindrome('abcd!@#$12321!@#$abcd', groupBy, pivotMustBePalindromic) // true
```
