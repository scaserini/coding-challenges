/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let queue = [];
  // Start Breadth First Search from all the land cells.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        // Starting traversal level is 0.
        queue.push([i, j, 0]);
      }
    }
  }

  // If there are no land cells (no 1s) or no sea cells (no 0s).
  if (queue.length === 0 || queue.length == grid.length ** 2) return -1;

  let maxDistance = 0;
  while (queue.length > 0) {
    let [row, col, level] = queue.shift();
    if (level > maxDistance) maxDistance = level;
    bfs(grid, queue, row, col, level);
  }

  return maxDistance;
};

function bfs(grid, queue, row, col, level) {
  // Up cell.
  if (row > 0 && grid[row - 1][col] === 0) {
    grid[row - 1][col] = level + 1;
    queue.push([row - 1, col, level + 1]);
  }
  // Down cell.
  if (row < grid.length - 1 && grid[row + 1][col] === 0) {
    grid[row + 1][col] = level + 1;
    queue.push([row + 1, col, level + 1]);
  }
  // Left cell.
  if (col > 0 && grid[row][col - 1] === 0) {
    grid[row][col - 1] = level + 1;
    queue.push([row, col - 1, level + 1]);
  }
  // Right cell.
  if (col < grid.length - 1 && grid[row][col + 1] === 0) {
    grid[row][col + 1] = level + 1;
    queue.push([row, col + 1, level + 1]);
  }
}
