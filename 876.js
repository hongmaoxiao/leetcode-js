/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let fast = head
  let slow = head

  while (fast.next !== null) {
    if (fast.next.next !== null) {
      fast = fast.next.next
    } else {
      fast = fast.next
    }
    slow = slow.next
  }

  return slow
};