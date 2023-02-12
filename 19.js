/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  if (!head) {
    return head
  }

  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  // 元素个数和n相等，删除头部
  if (arr.length === n) {
    head = head.next
    return head
  }

  let i = 0
  curr = head
  while (curr) {
    if (i === arr.length - n - 1) {
      curr.next = curr.next.next
      break
    }
    i++
    curr = curr.next
  }

  return head
};

// 加虚拟头部，优化第一种方法
const removeNthFromEnd1 = (head, n) => {
  if (!head) {
    return head
  }

  const dummyNode = new ListNode(-1, head)

  const arr = []
  let curr = dummyNode
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  let i = 0
  curr = dummyNode
  while (curr) {
    if (i === arr.length - n - 1) {
      curr.next = curr.next.next
      break
    }
    i++
    curr = curr.next
  }

  return dummyNode.next
};

const reverseList = (head) => {
  let prev = null, curr = head

  while (curr) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
};

// 倒转删除后倒转回来
const removeNthFromEnd2 = (head, n) => {
  if (!head) {
    return head
  }

  head = reverseList(head)

  // 第一个删除头部
  if (n === 1) {
    head = head.next
    return reverseList(head)
  }

  let curr = head
  let i = 1
  while (curr) {
    if (i === n - 1) {
      curr.next = curr.next.next
      break
    }
    i++
    curr = curr.next
  }
  return reverseList(head)
}