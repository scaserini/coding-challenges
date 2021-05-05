/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (S, shifts) {
  let amountToShift = shifts.reduce((acc, cur) => acc + cur, 0);
  const numberOfAlphabetLetters = 26;
  const lettersArray = S.split('');
  let result = [];

  for (let i = 0; i < lettersArray.length; i++) {
    const aCharCode = 'a'.charCodeAt(0); // 97
    const zCharCode = 'z'.charCodeAt(0); // 122
    let curLetterCharCode = lettersArray[i].charCodeAt(0);

    /*
      "abc" [3,5,9]
        - 'a' shifted by 3 + 5 + 9 = 17 positions
        - 'b' shifted by 5 + 9 = 14 positions
        - 'c' shifted by 9 positions
    */
    if (i > 0) amountToShift = amountToShift - shifts[i - 1];
    let resultCharCode = curLetterCharCode + (amountToShift % numberOfAlphabetLetters);
    resultCharCode = resultCharCode > zCharCode ? aCharCode + (resultCharCode % zCharCode) - 1 : resultCharCode;
    result.push(String.fromCharCode(resultCharCode));
  }

  return result.join('');
};
