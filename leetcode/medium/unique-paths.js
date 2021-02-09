/**
 * Tabulation
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let tab = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == 1 && j == 1) {
        tab[i][j] = 1;
      } else {
        tab[i][j] = tab[i - 1][j] + tab[i][j - 1];
      }
    }
  }

  return tab[m][n];
};

/**
 * Memoization
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, map = {}) {
  let key = m + ':' + n;
  if (map[key]) return map[key];

  if (m == 1 && n == 1) {
    return 1;
  } else if (m < 1 || n < 1) {
    return 0;
  } else {
    map[key] = uniquePaths(m - 1, n, map) + uniquePaths(m, n - 1, map);
    return map[key];
  }
};
