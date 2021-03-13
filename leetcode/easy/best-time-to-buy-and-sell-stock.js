/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxSell = prices[prices.length - 1];
  let maxProfit = 0;
  for (let i = prices.length - 2; i >= 0; i--) {
    let profit = maxSell - prices[i];
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[i] > maxSell) {
      maxSell = prices[i];
    }
  }
  return maxProfit;
};
