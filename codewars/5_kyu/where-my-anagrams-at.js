const sortString = (word) => word.split('').sort().join('');

function anagrams(word, words) {
  let wordLetters = sortString(word);
  return words.filter((w) => wordLetters === sortString(w));
}
