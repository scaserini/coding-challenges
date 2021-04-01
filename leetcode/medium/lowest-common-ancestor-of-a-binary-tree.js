/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let firstNodePath = [];
  let secondNodePath = [];

  dfs(root, p, firstNodePath);
  dfs(root, q, secondNodePath);

  // Path is reversed: start from the last node in the lists (the root node).
  let i = firstNodePath.length - 1;
  let j = secondNodePath.length - 1;
  while (firstNodePath[--i] === secondNodePath[--j]) {}
  return firstNodePath[++i];
};

function dfs(root, target, pathArray) {
  if (!root) return false;
  if (root.val == target.val || dfs(root.left, target, pathArray) || dfs(root.right, target, pathArray)) {
    // To avoid using unshift (and slow down the algorithm), build a reversed path.
    pathArray.push(root);
    return true;
  }
}
