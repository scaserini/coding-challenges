/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let lookupTable = new Set();
  for (let word of words) lookupTable.add(word);
  let longest = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let isValidWord = true;
    for (let j = 1; j <= word.length; j++) {
      let prefix = word.slice(0, j);
      if (!lookupTable.has(prefix)) isValidWord = false;
    }
    if (isValidWord && isLongestWord(longest, word)) longest = word;
  }

  return longest;
};

function isLongestWord(longest, word) {
  if (word.length < longest.length) return false;
  if (word.length > longest.length || word < longest) return true;
  return false;
}

/**
 * Trie solution.
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let trie = new Trie();
  for (let word of words) insertTrieNode(trie.root, word);
  let result = { longest: '' };
  dfs(trie.root, result, '');
  return result.longest;
};

function dfs(node, result, string) {
  if (isLongestWord(result, string)) result.longest = string;

  for (let c in node.children) {
    if (!node.children[c].endOfWord) continue;
    string += c;
    dfs(node.children[c], result, string);
    string = string.slice(0, -1);
  }
}

function isLongestWord(result, string) {
  if (string.length > result.longest.length) return true;
  if (string.length < result.longest.length) return false;
  return result.longest > string;
}

function insertTrieNode(root, word) {
  let currentNode = root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!currentNode.children[letter]) currentNode.children[letter] = new TrieNode(letter);
    currentNode = currentNode.children[letter];
  }
  currentNode.endOfWord = true;
}

function TrieNode(value) {
  this.value = value;
  this.children = {};
  this.endOfWord = false;
}

function Trie() {
  this.root = new TrieNode();
}
