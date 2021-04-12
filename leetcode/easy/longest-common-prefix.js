/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = '';
  if (strs.length === 0) return prefix;
  let firstWord = strs[0];
  strs = strs.slice(1);
  for (let i = 0; i < firstWord.length; i++) {
    let everyStringHasCurrentChar = strs.every((str) => str[i] === firstWord[i]);
    if (!everyStringHasCurrentChar) break;
    prefix += firstWord[i];
  }

  return prefix;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  strs.sort((a, b) => a.length - b.length);
  let result = strs[0];
  if (result.length === 0) return '';
  for (let i = 1; i < strs.length; i++) {
    let prefix = calculateLongestCommonPrefix(result, strs[i]);
    if (prefix === '') return '';
    result = prefix;
  }
  return result;
};

function calculateLongestCommonPrefix(word1, word2) {
  let idx1 = 0;
  let idx2 = 0;
  while (word1[idx1] === word2[idx2]) {
    idx1++;
    idx2++;
    if (idx1 == word1.length) break;
  }
  return word1.slice(0, idx1);
}

/**
 * Solution using a Trie (just for fun)
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const trie = new Trie();
  for (let str of strs) {
    if (str === '') return '';
    let currentNode = trie.head;
    insertNode(currentNode, str, 0);
  }
  return getLongestCommonPrefix(trie.head);
};

class TrieNode {
  constructor(value) {
    this.value = value;
    this.endOfWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.head = new TrieNode();
  }
}

function insertNode(currentNode, str, idx) {
  while (idx < str.length) {
    let char = str[idx++];
    if (!currentNode.children[char]) {
      currentNode.children[char] = new TrieNode(char);
    }
    currentNode = currentNode.children[char];
  }
  currentNode.endOfWord = true;
}

function getLongestCommonPrefix(currentNode) {
  let result = '';
  while (Object.keys(currentNode.children).length == 1) {
    if (currentNode.endOfWord) return result;
    let key = Object.keys(currentNode.children)[0];
    result += currentNode.children[key].value;
    currentNode = currentNode.children[key];
  }
  return result;
}
