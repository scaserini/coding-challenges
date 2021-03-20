/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let solutions = [];
  let grid = Array(n)
    .fill()
    .map(() => Array(n).fill('.'));
  solveNQueensRecursive(grid, 0, solutions);
  return solutions;
};

function solveNQueensRecursive(grid, col, solutions) {
  if (col === grid.length) {
    solutions.push(grid.map((row) => row.join('')));
  } else {
    for (let i = 0; i < grid.length; i++) {
      if (isCellAvailable(grid, i, col)) {
        grid[i][col] = 'Q';
        solveNQueensRecursive(grid, col + 1, solutions);
        grid[i][col] = '.';
      }
    }
  }
}

function isCellAvailable(grid, row, col) {
  // no queens on the same row
  for (let i = 0; i < grid.length; i++) {
    if (i !== col && grid[row][i] === 'Q') {
      return false;
    }
  }

  // no queens on the same col
  for (let i = 0; i < grid.length; i++) {
    if (i !== row && grid[i][col] === 'Q') {
      return false;
    }
  }

  // no queens diagonally
  let x = row;
  let y = col;
  while (--x >= 0 && --y >= 0) {
    if (grid[x][y] === 'Q') {
      return false;
    }
  }

  x = row;
  y = col;
  while (++x < grid.length && --y >= 0) {
    if (grid[x][y] === 'Q') {
      return false;
    }
  }

  return true;
}
