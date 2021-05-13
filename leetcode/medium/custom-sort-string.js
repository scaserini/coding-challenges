/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  const orderSet = new Set([...S]);
  return T.split('')
    .sort((a, b) => {
      let aIndx = orderSet.has(a) ? S.indexOf(a) : Infinity;
      let bIndx = orderSet.has(b) ? S.indexOf(b) : Infinity;

      return aIndx - bIndx;
    })
    .join('');
};

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  let resultString = '';
  let arrT = T.split('');
  for (let char of S) {
    while (arrT.indexOf(char) > -1) {
      let indx = arrT.indexOf(char);
      let removedChar = arrT.splice(indx, 1);
      resultString += removedChar[0];
    }
  }
  resultString += arrT.join('');

  return resultString;
};
