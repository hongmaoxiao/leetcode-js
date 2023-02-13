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

const sortList1 = (head) => {
  if (!head) {
    return head
  }

  let len = 0,
  node = head
  while (node) {
    len++
    node = node.next
  }

  const dummyNode = new ListNode(0, head)
  for (let subLength = 1; subLength < len; subLength <<= 1) {
    let prev = dummyNode, curr = dummyNode.next
    while (curr) {
      let head1 = curr
      for (let i = 1; i < subLength && curr.next; i++) {
        curr = curr.next
      }
      let head2 = curr.next
      curr.next = null
      curr = head2
      for (let i = 1; i < subLength && curr && curr.next; i++) {
        curr = curr.next
      }

      let next = null
      if (curr) {
        next = curr.next
        curr.next = null
      }
      
      const mergeList = merge(head1, head2)
      prev.next = mergeList
      while (prev.next) {
        prev = prev.next
      }

      curr = next
    }
  }

  return dummyNode.next
}