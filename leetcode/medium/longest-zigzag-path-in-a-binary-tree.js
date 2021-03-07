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
 * @return {number}
 */
var longestZigZag = function (root) {
  let max = 0;
  let queue = [];
  root.left && queue.push([root.left, 1, 'left']);
  root.right && queue.push([root.right, 1, 'right']);

  // BFS
  while (queue.length > 0) {
    let [node, curr, direction] = queue.shift();
    if (curr > max) {
      max = curr;
    }
    if (direction == 'left') {
      node.right && queue.push([node.right, curr + 1, 'right']);
      node.left && queue.push([node.left, 1, 'left']);
    } else {
      node.left && queue.push([node.left, curr + 1, 'left']);
      node.right && queue.push([node.right, 1, 'right']);
    }
  }

  return max;
};
