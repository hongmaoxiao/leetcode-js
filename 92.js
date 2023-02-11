/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  if (!head || !head.next || left === right) {
    return head
  }

  let arr = []
  let curr = head
  let i = 1
  while (curr) {
    if (i > right) {
      break
    }
    if (i >= left && i <= right) {
      arr.push(curr.val)
    }
    i++
    curr = curr.next
  }

  i = 1
  curr = head
  while (curr) {
    if (i > right) {
      break
    }
    if (i >= left && i <= right) {
      curr.val = arr[(right - left + 1) - 1 - (i - left)]
    }
    i++
    curr = curr.next
  }

  return curr
};

// 翻转链表
const reverseNode = (head) => {
  let prev = null, curr = head

  while (curr) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return head
}

const reverseBetween1 = (head, left, right) => {
  if (!head || !head.next || left === right) {
    return head
  }

  const dummyNode = new ListNode(-1)
  dummyNode.next = head

  // 被截断左边节点的前一个node
  let pre = dummyNode

  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }

  // 截断链表的最右一个node
  let rightNode = pre
  for (let j = 0; j < right - left + 1; j++) {
    rightNode = rightNode.next
  }

  // 截断链表
  let leftNode = pre.next
  // 被截断后右半边剩余的链表
  let rightNext = rightNode.next

  pre.next = null
  rightNode.next = null

  reverseNode(leftNode)

  pre.next = rightNode
  leftNode.next = rightNext
 
  return dummyNode.next
};