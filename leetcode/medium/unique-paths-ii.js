/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  return uniquePathsWithObstaclesRecursive(obstacleGrid);
};

var uniquePathsWithObstaclesRecursive = function (obstacleGrid, row = 0, col = 0, memo = {}) {
  let key = `${row}:${col}`;
  if (memo[key] !== undefined) return memo[key];
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;
  if (row == rows - 1 && col == cols - 1 && obstacleGrid[row][col] == 0) {
    return (memo[key] = 1);
  } else if (row >= rows || col >= cols || obstacleGrid[row][col] == 1) {
    return (memo[key] = 0);
  } else {
    memo[key] =
      uniquePathsWithObstaclesRecursive(obstacleGrid, row + 1, col, memo) +
      uniquePathsWithObstaclesRecursive(obstacleGrid, row, col + 1, memo);
    return memo[key];
  }
};
