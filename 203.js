/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  if (!head) {
    return head
  }

  while (head !== null && head.val === val) {
    head = head.next
  }

  let curr = head
  while (curr !== null && curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  
  return head
};

const removeElements1 = (head, val) => {
  let dummyHead = new ListNode(0) // 添加虚拟节点，指向head
  dummyHead.next = head

  let curr = dummyHead
  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  
  return dummyHead.next
};