/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k == 0) {
    return 0;
  }
  let count = 0;
  let currentProduct = 1;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    currentProduct *= nums[right];
    while (currentProduct >= k) {
      currentProduct /= nums[left];
      left++;
    }
    if (currentProduct < k) {
      count += right - left + 1;
    }
    right++;
  }

  return count;
};
