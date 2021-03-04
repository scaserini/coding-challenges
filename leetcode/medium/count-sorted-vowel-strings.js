/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return countVowelStringsRecursive(vowels, n, 0, {});
};

function countVowelStringsRecursive(vowels, n, indx, map) {
  let key = `${n}:${indx}`;
  if (map[key]) return map[key];
  if (n == 0) return 1;
  let results = 0;
  for (let i = indx; i < vowels.length; i++) {
    results += countVowelStringsRecursive(vowels, n - 1, i, map);
  }
  map[key] = results;
  return map[key];
}
