/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head) {
    return head
  }

  let len = 0
  let node = head
  while (node) {
    len++
    node = node.next
  }

  // 取余，否则浪费时间
  k = k % len 

  let dummyNode = new ListNode(-1, head)
  let curr = head
  for (let i = 0; i < k; i++) {
    while (curr) {
      if (curr.next && curr.next.next === null) {
        const temp = curr.next
        curr.next = null
        curr = temp
        curr.next = dummyNode.next
        dummyNode = new ListNode(-1, curr)
        break
      }
      curr = curr.next
    }
  }

  return dummyNode.next
};

const rotateRight1 = (head, k) => {
  if (!head || !head.next || k === 0) {
    return head
  }

  let len = 0
  let node = head
  while (node) {
    len++
    node = node.next
  }

  // 取余，否则浪费时间
  k = k % len 

  let dummyNode = new ListNode(-1, head)
  let curr = head
  while (curr) {
    if (curr && curr.next === null) {
      curr.next = dummyNode.next
      break
    }
    curr = curr.next
  }

  curr = head
  
  for (let i = 0; i < len - 1 - k; i++) {
    curr = curr.next    
  }

  const temp = curr.next
  curr.next = null
  curr = temp

  return curr
};