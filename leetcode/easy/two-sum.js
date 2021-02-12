/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let remainder = target - currentNumber;
    if (map[remainder] !== undefined) {
      return [map[remainder], i];
    }
    map[currentNumber] = i;
  }
};
