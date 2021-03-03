/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let tab = Array(text1.length + 1)
    .fill()
    .map(() => Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        tab[i][j] = 1 + tab[i - 1][j - 1];
      } else {
        tab[i][j] = Math.max(tab[i - 1][j], tab[i][j - 1]);
      }
    }
  }

  return tab[text1.length][text2.length];
};
