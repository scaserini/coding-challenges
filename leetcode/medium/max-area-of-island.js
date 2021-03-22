/**
 * In-place algorithm
 * Space complexity: O(1)
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        maxArea = Math.max(maxArea, dfs(grid, i, j));
      }
    }
  }

  return maxArea;
};

const dfs = (grid, row, col) => {
  grid[row][col] = 0;
  let currentSum = 1;

  // top
  if (row > 0 && grid[row - 1][col] == 1) {
    currentSum += dfs(grid, row - 1, col);
  }
  // right
  if (col < grid[0].length - 1 && grid[row][col + 1] == 1) {
    currentSum += dfs(grid, row, col + 1);
  }
  // bottom
  if (row < grid.length - 1 && grid[row + 1][col] == 1) {
    currentSum += dfs(grid, row + 1, col);
  }
  // left
  if (col > 0 && grid[row][col - 1] == 1) {
    currentSum += dfs(grid, row, col - 1);
  }

  return currentSum;
};

/**
 * Space complexity: O(m*n)
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  let visited = Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(false));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] == 1) {
        maxArea = Math.max(maxArea, dfs(grid, visited, i, j));
      }
    }
  }

  return maxArea;
};

const dfs = (grid, visited, row, col) => {
  visited[row][col] = true;
  let currentSum = 1;

  // top
  if (row > 0 && toVisit(grid, visited, row - 1, col)) {
    currentSum += dfs(grid, visited, row - 1, col);
  }
  // right
  if (col < grid[0].length - 1 && toVisit(grid, visited, row, col + 1)) {
    currentSum += dfs(grid, visited, row, col + 1);
  }
  // bottom
  if (row < grid.length - 1 && toVisit(grid, visited, row + 1, col)) {
    currentSum += dfs(grid, visited, row + 1, col);
  }
  // left
  if (col > 0 && toVisit(grid, visited, row, col - 1)) {
    currentSum += dfs(grid, visited, row, col - 1);
  }

  return currentSum;
};

const toVisit = (grid, visited, row, col) => !visited[row][col] && grid[row][col] == 1;
