/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let tab = Array(s.length + 1).fill(false);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || tab[j] === true) {
        let str = s.slice(j, i + 1);
        if (wordDict.indexOf(str) > -1) tab[i + 1] = true;
      }
    }
  }

  return tab[tab.length - 1];
};
