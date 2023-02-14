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
const swapPairs = (head) => {
  if (!head || !head.next) {
    return head
  }

  const dummyNode = new ListNode(-1, head)
  let lastTrans = dummyNode,
  prev = head,
  curr = head.next
  while (curr) {
    const temp = curr.next
    const prevnext = prev.next.next
    prev.next = curr.next
    curr.next = prev
    lastTrans.next = curr

    if (!temp || !temp.next) {
      break
    }

    lastTrans = prev
    curr = temp.next
    prev = prevnext
  }

  return dummyNode.next
};