/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let minSubArrayLength = null;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];
    if (currentSum >= target) {
      while (currentSum >= target) {
        if (!minSubArrayLength || right - left + 1 < minSubArrayLength) {
          minSubArrayLength = right - left + 1;
        }
        currentSum -= nums[left];
        left++;
      }
    }
    right++;
  }

  return minSubArrayLength || 0;
};
