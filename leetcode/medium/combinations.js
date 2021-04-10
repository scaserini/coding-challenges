/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let numbers = Array.from({ length: n }, (_, i) => i + 1);
  return combineHelper(numbers, k, 0);
};

function combineHelper(numbers, k, idx) {
  if (k === 0) return [[]];

  let combinations = [];

  for (let i = idx; i <= numbers.length - k; i++) {
    let remainders = combineHelper(numbers, k - 1, i + 1);
    for (let remainder of remainders) {
      combinations.push([...remainder, numbers[i]]);
    }
  }

  return combinations;
}
