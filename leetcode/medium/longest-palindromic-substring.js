/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // start_idx - end_idx  of the longest palindrome.
  let longestPal = [0, 0];

  for (let i = 1; i < s.length; i++) {
    let [start_1, end_1] = maxPalindrome(s, i, i);
    let [start_2, end_2] = maxPalindrome(s, i - 1, i);
    if (end_1 - start_1 > longestPal[1] - longestPal[0]) longestPal = [start_1, end_1];
    if (end_2 - start_2 > longestPal[1] - longestPal[0]) longestPal = [start_2, end_2];
  }

  return s.slice(longestPal[0], longestPal[1] + 1);
};

function maxPalindrome(s, start, end) {
  while (start >= 0 && end < s.length && s[start] == s[end]) {
    start--;
    end++;
  }
  return [++start, --end];
}
