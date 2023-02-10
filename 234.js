/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  if (!head) {
    return false
  }

  if (head && !head.next) {
    return true
  }

  const arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  for (let i = 0; i < arr.length; i++) {
    if (i > Math.floor(arr.length / 2)) {
      break
    }

    const first = arr[i]
    const last = arr[arr.length - 1 - i]

    if (first !== last) {
      return false
    }
  }

  return true
};