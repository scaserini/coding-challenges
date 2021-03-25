/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // In terms of performance and memory usage, Set() is better than a plain Object
  // In this case - Runtime: 30% less, Memory: 25% less
  let hashTable = new Set();
  let results = new Set();
  let left = 0;
  let right = 10;

  while (right <= s.length) {
    let key = s.slice(left, right);
    if (hashTable.has(key)) results.add(key);
    hashTable.add(key);
    right++;
    left++;
  }

  return [...results];
};
