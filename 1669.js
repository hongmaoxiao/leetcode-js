/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = (list1, a, b, list2) => {
  let prev = null
  let after = null

  let i = 0
  let curr = list1

  while (curr) {
    const temp = curr.next
    if (i === a - 1) {
      prev = curr
      curr.next = list2
      prev = list2
    }
    if (i === b) {
      after = curr.next
      break
    }
    i++
    curr = temp
  }

  while (prev.next) {
    prev = prev.next
  }

  prev.next = after

  return list1
};