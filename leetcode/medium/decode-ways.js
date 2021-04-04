/**
 * Memoization solution
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
