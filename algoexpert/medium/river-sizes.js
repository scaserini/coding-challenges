/**
 * O(mxn) time complexity
 * O(1) space complexity
 */

function riverSizes(matrix) {
  let rivers = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        let count = 0;
        let queue = [];
        queue.push([i, j]);
        matrix[i][j] = 0;

        // BFS
        while (queue.length > 0) {
          let [row, col] = queue.shift();
          count++;

          // top
          if (row > 0 && matrix[row - 1][col] == 1) {
            queue.push([row - 1, col]);
            matrix[row - 1][col] = 0;
          }
          // right
          if (col < matrix[0].length - 1 && matrix[row][col + 1] == 1) {
            queue.push([row, col + 1]);
            matrix[row][col + 1] = 0;
          }
          // bottom
          if (row < matrix.length - 1 && matrix[row + 1][col] == 1) {
            queue.push([row + 1, col]);
            matrix[row + 1][col] = 0;
          }
          // left
          if (col > 0 && matrix[row][col - 1] == 1) {
            queue.push([row, col - 1]);
            matrix[row][col - 1] = 0;
          }
        }

        rivers.push(count);
      }
    }
  }
  return rivers;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;

/**
 * O(mxn) time complexity
 * O(mxn) space complexity
 */

function riverSizes(matrix) {
  let rivers = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  let visited = Array(rows)
    .fill()
    .map((_) => Array(cols).fill(false));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 1 && !visited[i][j]) {
        let count = 0;
        let queue = [];
        queue.push([i, j]);
        visited[i][j] = true;

        // BFS
        while (queue.length > 0) {
          let [row, col] = queue.shift();
          count++;

          // top
          if (row > 0 && matrix[row - 1][col] == 1 && !visited[row - 1][col]) {
            queue.push([row - 1, col]);
            visited[row - 1][col] = true;
          }
          // right
          if (col < cols - 1 && matrix[row][col + 1] == 1 && !visited[row][col + 1]) {
            queue.push([row, col + 1]);
            visited[row][col + 1] = true;
          }
          // bottom
          if (row < rows - 1 && matrix[row + 1][col] == 1 && !visited[row + 1][col]) {
            queue.push([row + 1, col]);
            visited[row + 1][col] = true;
          }
          // left
          if (col > 0 && matrix[row][col - 1] == 1 && !visited[row][col - 1]) {
            queue.push([row, col - 1]);
            visited[row][col - 1] = true;
          }
        }
        rivers.push(count);
      }
    }
  }
  return rivers;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
