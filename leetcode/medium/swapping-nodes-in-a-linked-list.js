/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let currentNode = head;
  let count = 1;
  let firstSwap = null;
  let secondSwap = null;
  while (currentNode) {
    if (count == k) {
      firstSwap = currentNode;
    }
    count++;
    currentNode = currentNode.next;
  }
  currentNode = head;
  while (currentNode) {
    if (count - k == 1) {
      secondSwap = currentNode;
      break;
    }
    count--;
    currentNode = currentNode.next;
  }
  [firstSwap.val, secondSwap.val] = [secondSwap.val, firstSwap.val];
  return head;
};
