/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let dummyNode = new ListNode(-1)
  let prev = dummyNode

  let curr1 = l1
  let curr2 = l2

  let add = 0

  while (curr1 !== curr2) {
    const val1 = curr1 ? curr1.val : 0
    const val2 = curr2 ? curr2.val : 0
    
    let sum = val1 + val2 + add
    if (sum >= 10) {
      sum -= 10
      add = 1
    } else {
      add = 0
    }

    prev.next = new ListNode(sum)
    prev = prev.next

    curr1 = curr1 ? curr1.next : null
    curr2 = curr2 ? curr2.next : null
  } 

  if (add === 1) {
    prev.next = new ListNode(add)
  }

  return dummyNode.next
};