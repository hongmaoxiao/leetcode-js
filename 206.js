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
const reverseList = (head) => {
  let prev = head, curr = null

  while (curr) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
};

const reverseList1 = (head) => {
  if (!head || !head.next) {
    return head
  }

  const newHead = reverseList1(head.next)
  head.next.next = head
  head.next = null

  return newHead
};

const reverseList2 = (head) => {
  if (!head) {
    return head
  }

  const handle = (node) => {
    if (!node.next) {
      result = node
    } else {
      handle(node.next).next = node
      node.next = null
    }
    return node
  }

  let result
  handle(head)
  
  return result
};