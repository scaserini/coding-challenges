/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BFS solution
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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
      res.push([]);
    }
    res[depth].push(node.val);
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
