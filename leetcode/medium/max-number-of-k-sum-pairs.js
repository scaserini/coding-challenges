/**
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let hashtable = new Map();
  let count = 0;

  for (let num of nums) {
    let remainders = k - num;
    if (hashtable.get(remainders)) {
      count++;
      hashtable.set(remainders, hashtable.get(remainders) - 1);
    } else {
      if (!hashtable.has(num)) hashtable.set(num, 0);
      hashtable.set(num, hashtable.get(num) + 1);
    }
  }

  return count;
};

/**
 * Time: O(n + nlogn)
 * Space: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (k === sum) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return count;
};
