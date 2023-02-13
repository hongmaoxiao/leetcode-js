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
const sortList = (head) => {
  return toSortList(head, null)
};

const toSortList = (head, tail) => {
  if (!head) {
    return head
  }

  if (head.next === tail) {
    head.next = null
    return head
  }

  let slow = head, fast = head
  while (fast !== tail) {
    slow = slow.next
    fast = fast.next

    if (fast !== tail) {
      fast = fast.next
    }
  }
  const mid = slow
  return merge(toSortList(head, mid), toSortList(mid, tail))
}

const merge = (head, tail) => {
  const dummyNode = new ListNode(-1)
  let temp = dummyNode, head1 = head, head2 = tail

  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      temp.next = head1
      head1 = head1.next
    } else {
      temp.next = head2
      head2 = head2.next
    }
    temp = temp.next
  }

  if (head1 !== null) {
    temp.next = head1
  } else if (head2 !== null) {
    temp.next = head2
  }

  return dummyNode.next
}