/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let solutions = { count: 0 };
  let grid = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  totalNQueensRecursive(grid, 0, solutions);
  return solutions.count;
};

function totalNQueensRecursive(grid, col, solutions) {
  if (col === grid.length) {
    solutions.count++;
  } else {
    for (let i = 0; i < grid.length; i++) {
      if (isCellAvailable(grid, i, col)) {
        grid[i][col] = 1;
        totalNQueensRecursive(grid, col + 1, solutions);
        grid[i][col] = 0;
      }
    }
  }
}

function isCellAvailable(grid, row, col) {
  // no queens on the same row
  for (let i = 0; i < grid.length; i++) {
    if (i !== col && grid[row][i] === 1) {
      return false;
    }
  }

  // no queens on the same col
  for (let i = 0; i < grid.length; i++) {
    if (i !== row && grid[i][col] === 1) {
      return false;
    }
  }

  // no queens diagonally
  let x = row;
  let y = col;
  while (--x >= 0 && --y >= 0) {
    if (grid[x][y] === 1) {
      return false;
    }
  }

  x = row;
  y = col;
  while (++x < grid.length && --y >= 0) {
    if (grid[x][y] === 1) {
      return false;
    }
  }

  return true;
}
