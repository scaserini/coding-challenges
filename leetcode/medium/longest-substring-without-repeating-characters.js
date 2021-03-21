/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let visitedChars = new Set();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let char = s[right];
    while (visitedChars.has(char)) {
      visitedChars.delete(s[left]);
      left++;
    }
    visitedChars.add(char);
    if (visitedChars.size > maxLength) {
      maxLength = visitedChars.size;
    }
    right++;
  }

  return maxLength;
};
