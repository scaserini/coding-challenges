/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0;
  let sumTable = [0];

  for (let i = 0; i < nums.length; i++) sumTable.push(sumTable[i] + nums[i]);

  let hashtable = {};
  for (let i = 0; i < sumTable.length; i++) {
    let currentNum = sumTable[i];
    let target = currentNum - k;
    if (hashtable[target]) result += hashtable[target];
    if (!hashtable[currentNum]) hashtable[currentNum] = 0;
    hashtable[currentNum]++;
  }

  return result;
};
