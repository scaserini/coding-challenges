/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let result = {
    leaves: [],
    maxDepth: 0,
  };
  traverseTree(root, result, 0);
  return result.leaves.reduce((acc, cur) => (cur.depth === result.maxDepth ? acc + cur.val : acc), 0);
};

function traverseTree(node, result, depth) {
  if (!node.left && !node.right) {
    result.leaves.push({ val: node.val, depth });
    if (depth > result.maxDepth) result.maxDepth = depth;
    return false;
  }
  node.left && traverseTree(node.left, result, depth + 1);
  node.right && traverseTree(node.right, result, depth + 1);
}
