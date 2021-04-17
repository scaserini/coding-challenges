/**
 * Recursive solution - Memoization.
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let map = new Map();
  return minDistanceRecursive(word1, word2, word1.length, word2.length, map);
};

function minDistanceRecursive(word1, word2, length1, length2, map) {
  let key = `${length1}:${length2}`;
  if (map.has(key)) return map.get(key);

  if (length1 === 0) return length2;
  if (length2 === 0) return length1;

  if (word1[length1 - 1] === word2[length2 - 1]) {
    map.set(key, minDistanceRecursive(word1, word2, length1 - 1, length2 - 1, map));
    return map.get(key);
  }
  map.set(
    key,
    1 +
      Math.min(
        minDistanceRecursive(word1, word2, length1 - 1, length2, map), // delete
        minDistanceRecursive(word1, word2, length1 - 1, length2 - 1, map), // replace
        minDistanceRecursive(word1, word2, length1, length2 - 1, map) // insert
      )
  );
  return map.get(key);
}

/**
 * Iterative solution - Tabulation.
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let tab = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1).fill(0));

  for (let i = 0; i <= word2.length; i++) tab[0][i] = i;

  for (let i = 0; i <= word1.length; i++) tab[i][0] = i;

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        tab[i][j] = tab[i - 1][j - 1];
      } else {
        tab[i][j] = 1 + Math.min(tab[i - 1][j], tab[i - 1][j - 1], tab[i][j - 1]);
      }
    }
  }

  return tab[word1.length][word2.length];
};
