/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  if (!head || !head.next || left === right) {
    return head
  }

  let arr = []
  let curr = head
  let i = 1
  while (curr) {
    if (i > right) {
      break
    }
    if (i >= left && i <= right) {
      arr.push(curr.val)
    }
    i++
    curr = curr.next
  }

  i = 1
  curr = head
  while (curr) {
    if (i > right) {
      break
    }
    if (i >= left && i <= right) {
      curr.val = arr[(right - left + 1) - 1 - (i - left)]
    }
    i++
    curr = curr.next
  }

  return curr
};