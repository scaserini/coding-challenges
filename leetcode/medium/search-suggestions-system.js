/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  let result = [];
  let stopSearch = false;
  let startFrom = 0;
  for (let i = 0; i < searchWord.length; i++) {
    if (stopSearch) {
      result.push([]);
      continue;
    }
    let substr = searchWord.slice(0, i + 1);
    let res = [];

    startFrom = substrSearch(products, substr, startFrom);
    if (startFrom === -1) {
      stopSearch = true;
    } else {
      for (let j = startFrom; j < Math.min(startFrom + 3, products.length); j++) {
        if (products[j].indexOf(substr) === 0) {
          res.push(products[j]);
        }
      }
    }

    result.push(res);
  }
  return result;
};

function substrSearch(products, substr, startFrom) {
  for (let i = startFrom; i < products.length; i++) {
    if (products[i].indexOf(substr) == 0) {
      return i;
    }
  }
  return -1;
}
