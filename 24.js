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

const swapPairs1 = (head) => {
  if (!head || !head.next) {
    return head
  }

  const dummyNode = new ListNode(-1, head)
  let temp = dummyNode
  while (temp.next && temp.next.next) {
    const node1 = temp.next
    const node2 = temp.next.next
    node1.next = node2.next
    node2.next = node1
    temp.next = node2
    temp = node1
  }

  return dummyNode.next
};

const swapPairs2 = (head) => {
  if (!head || !head.next) {
    return head
  }

  const newHead = head.next
  head.next = swapPairs2(newHead.next)
  newHead.next = head
  return newHead
};