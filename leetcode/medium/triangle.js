/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  return Math.min(...minimumTotalRecursive(triangle, triangle.length - 1));
};

function minimumTotalRecursive(triangle, i) {
  if (i == 0) {
    return [triangle[0][0]];
  }
  let results = [];
  let previousRowPathSum = minimumTotalRecursive(triangle, i - 1);
  for (let z = 0; z < triangle[i].length; z++) {
    let firstChoice = previousRowPathSum[Math.max(z - 1, 0)];
    let secondChoice = previousRowPathSum[Math.min(z, previousRowPathSum.length - 1)];
    results.push(triangle[i][z] + Math.min(firstChoice, secondChoice));
  }
  return results;
}
