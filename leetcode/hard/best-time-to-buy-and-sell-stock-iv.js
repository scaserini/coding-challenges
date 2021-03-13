/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length < 2) return 0;
  let profits = Array(k + 1)
    .fill()
    .map(() => Array(prices.length).fill(0));

  for (let i = 1; i < profits.length; i++) {
    let maxPreviousProfit = -Infinity;
    for (let j = 1; j < profits[0].length; j++) {
      maxPreviousProfit = Math.max(maxPreviousProfit, profits[i - 1][j - 1] - prices[j - 1]);
      profits[i][j] = Math.max(profits[i][j - 1], prices[j] + maxPreviousProfit);
    }
  }

  return profits[k][prices.length - 1];
};
