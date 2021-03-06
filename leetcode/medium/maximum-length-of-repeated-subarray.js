/**
 * Time: O(n*m) - Space: O(n*m)
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let tab = Array(A.length + 1)
    .fill()
    .map(() => Array(B.length + 1).fill(0));
  let max = 0;

  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] == B[j - 1]) {
        tab[i][j] = 1 + tab[i - 1][j - 1];
        if (tab[i][j] > max) {
          max = tab[i][j];
        }
      }
    }
  }

  return max;
};

/**
 * Time: O(n*m) - Space: O(1)
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let tab = Array(2)
    .fill()
    .map(() => Array(B.length + 1).fill(0));
  let max = 0;

  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] == B[j - 1]) {
        tab[1][j] = 1 + tab[0][j - 1];
        if (tab[1][j] > max) {
          max = tab[1][j];
        }
      }
    }
    tab[0] = tab[1];
    tab[1] = Array(B.length + 1).fill(0);
  }

  return max;
};
