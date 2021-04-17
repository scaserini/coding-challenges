/**
 * O(n^2) solution
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 1) return 1;

  let tab = Array(nums.length + 1).fill(0);
  for (let i = 0; i < tab.length; i++) {
    for (let j = i + 1; j < tab.length; j++) {
      if (nums[i] < nums[j]) {
        tab[j] = Math.max(tab[j], tab[i] + 1);
      }
    }
  }

  return Math.max(...tab) + 1;
};
