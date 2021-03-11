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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];

  let queue = [];
  queue.push({
    node: root,
    depth: 0,
  });

  let res = [];
  while (queue.length > 0) {
    let { node, depth } = queue.shift();
    while (res.length <= depth) {
      res.unshift([]); // this line differ from binary-tree-level-order-traversal
    }
    res[res.length - depth - 1].push(node.val); // this line differ from binary-tree-level-order-traversal
    if (node.left) {
      queue.push({
        node: node.left,
        depth: depth + 1,
      });
    }
    if (node.right) {
      queue.push({
        node: node.right,
        depth: depth + 1,
      });
    }
  }

  return res;
};
