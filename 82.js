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
const deleteDuplicates = (head) => {
  if (!head) {
    return head
  }

  const dummyNode = new ListNode(-1)
  dummyNode.next = head

  let curr = dummyNode
  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const x = curr.next.val
      while (curr.next && curr.next.val === x) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next
    }
  }

  return dummyNode.next
};

// 递归解法
const deleteDuplicates1 = (head) => {
  if (!head || !head.next) {
    return head
  }

  if (head.val !== head.next.val) {
    head.next = deleteDuplicates1(head.next)
  } else {
    let curr = head.next
    while (curr && head.val === curr.val) {
      curr = curr.next
    }
    return deleteDuplicates1(curr)
  }

  return head
};