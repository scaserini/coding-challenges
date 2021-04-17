/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') return [];
  let letterCombinations = [];
  let lettersMap = createLettersMap();
  dfs([...digits], letterCombinations, 0, '', lettersMap);
  return letterCombinations;
};

function dfs(digitsArray, letterCombinations, digitIdx, combination, lettersMap) {
  if (digitIdx === digitsArray.length) {
    letterCombinations.push(combination);
    return;
  }

  let digit = digitsArray[digitIdx];
  let letters = lettersMap.get(digit);
  for (let letter of letters) {
    combination += letter;
    dfs(digitsArray, letterCombinations, digitIdx + 1, combination, lettersMap);
    combination = combination.substr(0, combination.length - 1);
  }
}

function createLettersMap() {
  return new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ]);
}
