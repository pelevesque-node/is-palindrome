'use strict'

function getGroupPairLength (groupBy) {
  return groupBy * 2
}

function getNumGroupPairs (str, groupBy) {
  return Math.floor(str.length / getGroupPairLength(groupBy))
}

function getPivot (str, groupBy) {
  let pivot = ''
  const pivotLength = str.length % getGroupPairLength(groupBy)
  if (pivotLength > 0) {
    const pivotStartIndex = getNumGroupPairs(str, groupBy) * groupBy
    pivot = str.substr(pivotStartIndex, pivotLength)
  }
  return pivot
}

// A palindrome check without caring about the pivot.
// This is enoough for traditional palindromes of groupBy = 1 and pivot = 1
// An additioonal pivot check is needed for palindroms of groupBy > 1
function compareGroups (str, groupBy) {
  let allSame = true
  const numGroupPairs = getNumGroupPairs(str, groupBy)
  for (let i = 0; i < numGroupPairs; i++) {
    const str1 = str.substr(i * groupBy, groupBy)
    const str2 = str.substr(str.length - (groupBy * (i + 1)), groupBy)
    if (str1.localeCompare(str2) !== 0) {
      allSame = false
      break
    }
  }
  return allSame
}

module.exports = (str, groupBy = 1, pivotMustBePalindromic = false) => {
  if (str.length < groupBy) return false
  if (str.length === groupBy) return true
  const pivot = getPivot(str, groupBy)
  if (pivot && !compareGroups(pivot, 1) && pivotMustBePalindromic) return false
  return compareGroups(str, groupBy)
}
