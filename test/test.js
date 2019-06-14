/* global describe, it */
'use strict'

const expect = require('chai').expect
const isPalindrome = require('../index')

describe('#isPalindrome()', () => {
  describe('#tests strings that are too short', () => {
    it('should return false for an empty string', () => {
      const str = ''
      const result = isPalindrome(str)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false for a string shorter than groupBy', () => {
      const str = 'aaaa'
      const groupBy = 5
      const result = isPalindrome(str, groupBy)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('#tests strings with a length equal to groupBy', () => {
    it('should return true for a string equal to groupBy (test groupBy 1)', () => {
      const str = 'a'
      const result = isPalindrome(str)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true for a string equal to groupBy (test groupBy 5)', () => {
      const str = '12345'
      const groupBy = 5
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#tests for traditional palindromes (groupBy = 1)', () => {
    it('should return false for a non palindrome', () => {
      const str = 'abc'
      const result = isPalindrome(str)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true for a palindrome without a pivot', () => {
      const str = 'abccba'
      const result = isPalindrome(str)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true for a palindrome with a pivot', () => {
      const str = 'abc cba'
      const result = isPalindrome(str)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true for a string with all the same characters', () => {
      const str = 'aaaaa'
      const result = isPalindrome(str)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#tests for groupBy = 2 without a pivot', () => {
    it('should return false for a non palindrome', () => {
      const str = 'abba'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true for a palindrome', () => {
      const str = 'abab'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#tests for groupBy = 6 without a pivot', () => {
    it('should return false for a non palindrome', () => {
      const str = '11cdef123456!@#$%^!@#$%^123456abcd11'
      const groupBy = 6
      const result = isPalindrome(str, groupBy)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true for a palindrome', () => {
      const str = 'abcdef123456!@#$%^!@#$%^123456abcdef'
      const groupBy = 6
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#tests for a pivot = 1 and smaller than groupBy', () => {
    it('should return false for a non palindrome', () => {
      const str = 'abcba'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true for a non palindrome', () => {
      const str = 'abcab'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#tests for a pivot = 2 and equal to groupBy', () => {
    it('should return false for a non palindrome', () => {
      const str = 'abccba'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true for a palindrome', () => {
      const str = 'abccab'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#tests for a pivot = 3 and larger than groupBy', () => {
    it('should return false for a non palindrome', () => {
      const str = 'abcccba'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true for a palindrome', () => {
      const str = 'abcccab'
      const groupBy = 2
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#tests for pivotMustBePalindromic flag)', () => {
    it('should return true for a non palindromic pivot with pivotMustBePalindromic = default', () => {
      const str = 'abc123!@#12345!@#123abc'
      const groupBy = 3
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true for a palindromic pivot with pivotMustBePalindromic = default', () => {
      const str = 'abc123!@#12321!@#123abc'
      const groupBy = 3
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true for a non palindromic pivot with pivotMustBePalindromic = false', () => {
      const str = 'abc123!@#12345!@#123abc'
      const groupBy = 3
      const pivotMustBePalindromic = false
      const result = isPalindrome(str, groupBy, pivotMustBePalindromic)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true for a palindromic pivot with pivotMustBePalindromic = false', () => {
      const str = 'abc123!@#12321!@#123abc'
      const groupBy = 3
      const pivotMustBePalindromic = false
      const result = isPalindrome(str, groupBy, pivotMustBePalindromic)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false for a non palindromic pivot with pivotMustBePalindromic = true', () => {
      const str = 'abc123!@#12345!@#123abc'
      const groupBy = 3
      const pivotMustBePalindromic = true
      const result = isPalindrome(str, groupBy, pivotMustBePalindromic)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true for a palindromic pivot with pivotMustBePalindromic = true', () => {
      const str = 'abc123!@#12321!@#123abc'
      const groupBy = 3
      const pivotMustBePalindromic = true
      const result = isPalindrome(str, groupBy, pivotMustBePalindromic)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('#ad hoc tests', () => {
    it('should return false : groupBy = 5, non palindromic pivot = 7, pivotMustBeAPalindromic = true', () => {
      const str = 'abcde12345!@#$%1234567!@#$%12345abcde'
      const groupBy = 5
      const pivotMustBePalindromic = true
      const result = isPalindrome(str, groupBy, pivotMustBePalindromic)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true : groupBy = 5, non palindromic pivot = 7', () => {
      const str = 'abcde12345!@#$%1234567!@#$%12345abcde'
      const groupBy = 5
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true : groupBy = 5, palindromic pivot = 7', () => {
      const str = 'abcde12345!@#$%1234321!@#$%12345abcde'
      const groupBy = 5
      const result = isPalindrome(str, groupBy)
      const expected = true
      expect(result).to.equal(expected)
    })
  })
})
