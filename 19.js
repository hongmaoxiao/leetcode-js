/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  if (!head) {
    return head
  }

  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  // 元素个数和n相等，删除头部
  if (arr.length === n) {
    head = head.next
    return head
  }

  let i = 0
  curr = head
  while (curr) {
    if (i === arr.length - n - 1) {
      curr.next = curr.next.next
      break
    }
    i++
    curr = curr.next
  }

  return head
};