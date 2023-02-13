/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    if (!head || !head.next) {
      return null
    }

    const visited = new Set()
    while (head !== null) {
      if (visited.has(head)) {
        return head
      }
      visited.add(head)
      head = head.next
    }

    return null
};

const detectCycle1 = (head) => {
  if (!head || !head.next) {
    return null
  }

  let slow = head, fast = head
  while (fast) {
    slow = slow.next
    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null
    }
    if (fast === slow) {
      let ptr = head
      while (slow !== ptr) {
        ptr = ptr.next
        slow = slow.next
      }
      return ptr
    }
  }

  return null
};