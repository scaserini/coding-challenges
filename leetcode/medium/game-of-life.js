/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let changesList = [];

  // add next changes to the list
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let nextValue = getNextValue(board, i, j);
      if (nextValue !== board[i][j]) {
        changesList.push([i, j, nextValue]);
      }
    }
  }

  // apply changes
  for (let change of changesList) {
    let [i, j, newValue] = change;
    board[i][j] = newValue;
  }
};

const getNextValue = (board, i, j) => {
  let count = 0;
  let rows = board.length;
  let cols = board[0].length;
  for (let m = Math.max(0, i - 1); m <= Math.min(i + 1, rows - 1); m++) {
    for (let n = Math.max(0, j - 1); n <= Math.min(j + 1, cols - 1); n++) {
      if (m !== i || n !== j) {
        count += board[m][n];
      }
    }
  }

  if (count == 3 || (board[i][j] == 1 && count == 2)) {
    return 1;
  }
  return 0;
};
