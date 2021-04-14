/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let postorderIndex = { value: postorder.length - 1 };
  return buildTreeRecursive(inorder, postorder, 0, inorder.length - 1, postorderIndex);
};

function buildTreeRecursive(inorder, postorder, inorderStart, inorderEnd, postorderIndex) {
  if (postorderIndex.value < 0) return null;
  if (inorderStart > inorderEnd) return null;

  let currentValue = postorder[postorderIndex.value];
  let root = new TreeNode(currentValue);
  postorderIndex.value--;

  if (inorderStart == inorderEnd) return root;

  let inorderIndex = inorder.indexOf(currentValue);
  root.right = buildTreeRecursive(inorder, postorder, inorderIndex + 1, inorderEnd, postorderIndex);
  root.left = buildTreeRecursive(inorder, postorder, inorderStart, inorderIndex - 1, postorderIndex);

  return root;
}
