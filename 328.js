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
const oddEvenList = (head) => {
  if (!head) {
    return head
  }

  let dummyOdd = new ListNode(-1, head)
  let oddStart = dummyOdd
  let dummyEven = new ListNode(-1)
  let evenStart = dummyEven

  let curr = head
  let i = 1
  while (curr) {
    const temp = curr.next
    curr.next = null
    if (i % 2 === 1) {
      oddStart.next = curr
      oddStart = oddStart.next
    } else {
      evenStart.next = curr
      evenStart = evenStart.next
    }
    i++
    curr = temp
  }
  oddStart.next = dummyEven.next
  return dummyOdd.next
};