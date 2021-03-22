/**
 * Space complexity: O(m*n)
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  let visited = Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(false));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] == 1) {
        dfs(grid, visited, i, j);
        islands++;
      }
    }
  }
  return islands;
};

const dfs = (grid, visited, row, col) => {
  if (visited[row][col] || grid[row][col] == 0) return false;
  visited[row][col] = true;
  // top
  if (row > 0) dfs(grid, visited, row - 1, col);
  // right
  if (col < grid[0].length - 1) dfs(grid, visited, row, col + 1);
  // bottom
  if (row < grid.length - 1) dfs(grid, visited, row + 1, col);
  // left
  if (col > 0) dfs(grid, visited, row, col - 1);
};

/**
 * In-place algorithm
 * Space complexity: O(1)
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j);
        islands++;
      }
    }
  }
  return islands;
};

const dfs = (grid, row, col) => {
  if (grid[row][col] == 0) return false;
  grid[row][col] = 0;
  // top
  if (row > 0) dfs(grid, row - 1, col);
  // right
  if (col < grid[0].length - 1) dfs(grid, row, col + 1);
  // bottom
  if (row < grid.length - 1) dfs(grid, row + 1, col);
  // left
  if (col > 0) dfs(grid, row, col - 1);
};
