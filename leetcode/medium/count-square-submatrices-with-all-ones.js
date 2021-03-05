/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));

  for (let i = 1; i < matrixCopy.length; i++) {
    for (let j = 1; j < matrixCopy[0].length; j++) {
      if (matrixCopy[i][j] > 0 && matrixCopy[i - 1][j - 1] > 0) {
        /**
         * 1 1 1 1     1 1 1 1
         * 0 1 1 1 --> 0 1 2 2
         * 0 1 1 1     0 1 2 3
         */
        let sizeOfPreviousSquareOfOnes = matrixCopy[i - 1][j - 1];
        let squaresSum = 0;
        let _j = j;
        let _i = i;
        // check only the 'ones' on the outermost sides (right and bottom) of the current square,
        // because we know that each element in (sizeOf)PreviousSquareOfOnes are ones
        while (sizeOfPreviousSquareOfOnes-- && matrixCopy[i][--_j] > 0 && matrixCopy[--_i][j] > 0) {
          squaresSum++;
        }
        matrixCopy[i][j] += squaresSum;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < matrixCopy.length; i++) {
    for (let j = 0; j < matrixCopy[0].length; j++) {
      count += matrixCopy[i][j];
    }
  }
  return count;
};
