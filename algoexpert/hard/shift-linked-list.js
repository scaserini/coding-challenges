function shiftLinkedList(head, k) {
  // Time complexity: O(n)
  // Space complexity: O(1)
  let tail = head;
  let numberOfNodes = 1;
  while (tail.next) {
    numberOfNodes++;
    tail = tail.next;
  }

  let offset = k % numberOfNodes;
  if (offset === 0) {
    return head;
  }
  offset = offset > 0 ? numberOfNodes - offset : Math.abs(offset);

  let curr = head;
  let prev = null;
  while (offset > 0) {
    prev = curr;
    curr = curr.next;
    offset--;
  }

  prev.next = null;
  tail.next = head;

  return curr;
}

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Do not edit the line below.
exports.shiftLinkedList = shiftLinkedList;
