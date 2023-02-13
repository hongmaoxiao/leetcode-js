/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  if (!head) {
    return head
  }

  let smallDummyNode = new ListNode(-1)
  let bigDummyNode = new ListNode(-1)
  let smallTemp = smallDummyNode
  let bigTemp = bigDummyNode
  

  let curr = head
  while (curr) {
    const temp = curr.next
    if (curr.val < x) {
      smallTemp.next = curr
      smallTemp = smallTemp.next
    } else {
      bigTemp.next = curr
      bigTemp = bigTemp.next
    }

    curr.next = null
    curr = temp
  }

  smallTemp.next = bigDummyNode.next

  return smallDummyNode.next
};