/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let mem = new Map();
  return lpsRecursive(s, 0, s.length - 1, mem);
};

function lpsRecursive(s, left, right, mem) {
  let key = `${left}:${right}`;
  if (mem.has(key)) return mem.get(key);
  if (left > right) return 0;
  // The palindrome of a one length string is 1.
  if (left == right) return 1;

  if (s[left] === s[right]) {
    mem.set(key, 2 + lpsRecursive(s, left + 1, right - 1, mem));
  } else {
    mem.set(key, Math.max(lpsRecursive(s, left + 1, right, mem), lpsRecursive(s, left, right - 1, mem)));
  }
  return mem.get(key);
}
