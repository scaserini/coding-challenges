/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  let uniqueTriplets = [];
  let firstNumberMap = {};
  let secondThirdNumberMap = {};

  for (let i = 0; i < nums.length; i++) {
    let firstNumber = nums[i];
    // to avoid recalculating with the same first number(all the same numbers are neighbors)
    if (firstNumberMap[firstNumber]) {
      continue;
    }
    firstNumberMap[firstNumber] = true;
    let target = 0 - firstNumber;
    let array = nums.slice(i + 1);
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
      let secondNumber = array[left];
      let thirdNumber = array[right];
      let sum = secondNumber + thirdNumber;
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        let key = secondNumber + ':' + thirdNumber;
        if (!secondThirdNumberMap[key]) {
          uniqueTriplets.push([firstNumber, secondNumber, thirdNumber]);
        }
        secondThirdNumberMap[key] = true;
        left++;
      }
    }
  }

  return uniqueTriplets;
};
