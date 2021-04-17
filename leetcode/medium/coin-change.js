/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  let tab = Array(amount + 1).fill(0);

  for (let i = 0; i < tab.length; i++) {
    if (i > 0 && tab[i] === 0) continue;

    for (let coin of coins) {
      let index = i + coin;
      if (index < tab.length) {
        tab[index] = tab[index] === 0 ? tab[i] + 1 : Math.min(tab[index], tab[i] + 1);
      }
    }
  }

  return tab.pop() || -1;
};
