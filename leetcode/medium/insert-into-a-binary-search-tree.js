/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  let currentNode = root;
  if (!currentNode) return newNode;

  while (true) {
    const nextNode = val < currentNode.val ? 'left' : 'right';
    if (!currentNode[nextNode]) {
      currentNode[nextNode] = newNode;
      break;
    }
    currentNode = currentNode[nextNode];
  }

  return root;
};
