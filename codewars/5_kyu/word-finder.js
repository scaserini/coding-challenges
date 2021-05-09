function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function (pattern) {
  return this.words.filter((word) => {
    const wordLen = word.length;
    const pattLen = pattern.length;
    if (wordLen != pattLen) return false;

    for (let i = 0; i < pattLen; i++) {
      if (pattern[i] === '?') continue;
      if (word[i] !== pattern[i]) return false;
    }

    return true;
  });
};
