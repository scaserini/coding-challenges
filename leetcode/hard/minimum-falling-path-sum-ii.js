/**
 * O(mxn) time
 * O(mxn) space
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function (arr) {
  // tabulation
  let tab = Array(arr.length)
    .fill()
    .map(() => Array(arr[0].length).fill(0));

  for (let i = 0; i < arr.length; i++) {
    // find the two minimum values to avoid having to recalculate the minimum every time without considering the current column
    let [first_min, second_min] = findMinsInPreviousRow(tab, i - 1);
    for (let j = 0; j < arr.length; j++) {
      if (i == 0) {
        tab[i][j] = arr[i][j];
      } else {
        // no two elements chosen in adjacent rows are in the same column
        tab[i][j] = arr[i][j] + (tab[i - 1][j] == first_min ? second_min : first_min);
      }
    }
  }

  return Math.min(...tab.pop());
};

const findMinsInPreviousRow = (arr, row) => {
  if (row < 0) return [];
  let array = [...arr[row]];
  let first_min = Math.min(...array);
  array.splice(array.indexOf(first_min), 1);
  let second_min = Math.min(...array);
  return [first_min, second_min];
};

/**
 * O(mxn) time
 * O(1) space
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function (arr) {
  // only two rows are needed: the previous row and the current row
  let tab = Array(2)
    .fill()
    .map(() => Array(arr[0].length).fill(0));

  for (let i = 0; i < arr.length; i++) {
    let [first_min, second_min] = i > 0 ? findMinsInPreviousRow(tab[0]) : [];
    for (let j = 0; j < arr.length; j++) {
      if (i == 0) {
        tab[0][j] = arr[i][j];
      } else {
        tab[1][j] = arr[i][j] + (tab[0][j] == first_min ? second_min : first_min);
      }
    }
    if (i > 0) {
      // the current row becomes the previous row
      tab[0] = [...tab[1]];
    }
  }
  return Math.min(...tab.pop());
};

const findMinsInPreviousRow = (arr) => {
  let array = [...arr];
  let first_min = Math.min(...array);
  array.splice(array.indexOf(first_min), 1);
  let second_min = Math.min(...array);
  return [first_min, second_min];
};
