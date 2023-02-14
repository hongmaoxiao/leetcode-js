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
const insertionSortList = (head) => {
  if (!head || !head.next) {
    return head
  }

  const dummyNode = new ListNode(-1, head)
  let lastSorted = head, curr = head.next

  while (curr) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next
    } else {
      let prev = dummyNode
      while (prev.next.val <= curr.val) {
        prev = prev.next
      }
      lastSorted.next = curr.next
      curr.next = prev.next
      prev.next = curr
    }

    curr = lastSorted.next
  }
  
  return dummyNode.next
};