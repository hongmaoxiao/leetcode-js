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
// 分头部删除和中间删除方法
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

// 增加虚拟节点，方便统一删除方法
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

// 递归法
const removeElements2 = (head, val) => {
  if (head === null) {
    return head
  }

  head.next = removeElements2(head.next, val)
  return head.val === val ? head.next : head
};