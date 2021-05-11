/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    let tempAmount = s[i] === 'R' ? 1 : -1;
    temp += tempAmount;
    if (temp === 0) count++;
  }

  return count;
};
