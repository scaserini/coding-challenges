/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preorderIndex = { value: 0 };
  return buildTreeRecursive(preorder, inorder, 0, inorder.length - 1, preorderIndex);
};

function buildTreeRecursive(preorder, inorder, inorderStart, inorderEnd, preorderIndex) {
  if (preorderIndex.value >= preorder.length) return null;
  if (inorderStart > inorderEnd) return null;

  let currentValue = preorder[preorderIndex.value];
  let root = new TreeNode(currentValue);
  preorderIndex.value++;

  if (inorderStart == inorderEnd) return root;

  let inorderIndx = inorder.indexOf(currentValue);
  root.left = buildTreeRecursive(preorder, inorder, inorderStart, inorderIndx - 1, preorderIndex);
  root.right = buildTreeRecursive(preorder, inorder, inorderIndx + 1, inorderEnd, preorderIndex);

  return root;
}
