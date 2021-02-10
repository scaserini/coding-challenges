/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (n == m) {
    return head;
  }

  let currentNode = head;
  let count = 0;
  // previousReverseBetweenNode.next will point to the first node of reversedBetweenList
  let previousReverseBetweenNode = null;
  let previousNode = null;
  // Reversed linked list from position m to n
  let reversedBetweenList = null;
  // tailNode will be the last node of reversedBetweenList
  let tailNode = null;

  while (currentNode) {
    count++;
    if (count == m) {
      previousReverseBetweenNode = previousNode;
      reversedBetweenList = { ...currentNode };
      tailNode = reversedBetweenList;
    } else if (count > m && count <= n) {
      let temp = { ...currentNode };
      temp.next = reversedBetweenList;
      reversedBetweenList = temp;
    }
    if (count == n) {
      tailNode.next = currentNode.next;
      if (previousReverseBetweenNode) {
        previousReverseBetweenNode.next = reversedBetweenList;
      } else {
        // previousReverseBetweenNode == null when m == 1
        head = reversedBetweenList;
      }
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  return head;
};
