/**
 * Recursive solution using memoization.
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  return numDecodingsRecursive(s, 0, {});
};

function numDecodingsRecursive(s, offset, map) {
  if (map[offset]) return map[offset];
  if (s[offset] == 0) return 0;
  if (offset == s.length) return 1;
  let result = numDecodingsRecursive(s, offset + 1, map);
  if (s.length > 1 && s[offset] + s[offset + 1] < 27) {
    result += numDecodingsRecursive(s, offset + 2, map);
  }
  map[offset] = result;
  return map[offset];
}

/**
 * Iterative solution using tabulation.
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let len = s.length;
  let tab = Array(len + 1).fill(0);
  tab[len] = 1;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] == 0) {
      tab[i] = 0;
    } else {
      tab[i] += tab[i + 1];
      if (i < len - 1 && s[i] + s[i + 1] < 27) {
        tab[i] += tab[i + 2];
      }
    }
  }
  return tab[0];
};
