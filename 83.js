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
const deleteDuplicates = (head) => {
  if (!head) {
    return head
  }

  let curr = head

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return head
};

const deleteDuplicates1 = (head) => {
  let retHead = head

  while (head && head.next) {
    while (head && head.next && head.val === head.next.val) {
      head.next = head.next.next
    }
    head = head.next
  }

  return retHead
};