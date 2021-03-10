/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let s = S.split('-');
  // es: "1-2--3--4-5--6--7" --> [ "1", "2", "", "3", "", "4", "5", "", "6", "", "7" ]
  let root = new TreeNode(s[0]);
  let currentNode = root;
  let indx = 1;
  let currentLevel = 1;
  let nextLevel = 1;
  let stack = [currentNode];
  while (indx < s.length) {
    if (s[indx] != '') {
      if (nextLevel <= currentLevel) {
        while (currentLevel > nextLevel) {
          currentLevel--;
          currentNode = stack.pop();
        }
      }
      let node = new TreeNode(s[indx]);
      if (currentNode.left) {
        currentNode.right = node;
        stack.push(currentNode);
        currentNode = currentNode.right;
      } else {
        currentNode.left = node;
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      currentLevel++;
      nextLevel = 1;
    } else {
      nextLevel++;
    }
    indx++;
  }
  return root;
};
