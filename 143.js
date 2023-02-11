/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  if (!head) {
    return head
  }

  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  let i = 0, j = arr.length - 1
  while (i < j) {
    arr[i].next = arr[j]
    i++
    if (i === j) {
      break
    }
    arr[j].next = arr[i]
    j--
  }
  arr[i].next = null
};