/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (head === null) {
    return false
  }

  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    if (slow.next === fast.next.next) {
      return true
    }
    slow = slow.next
    fast = fast.next.next
  }
  return false
}