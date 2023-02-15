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
 * @return {ListNode[]}
 */
const splitListToParts = (head, k) => {
  if (k === 1) {
    return [head]
  }

  let len = 0
  let curr = head
  while (curr) {
    len++
    curr = curr.next
  }

  const div = Math.floor(len / k)
  let remain = k > len ? 0 : len % k

  let dummyNode = new ListNode(-1, head)

  let arr = []
  curr = head
  for (let i = 0; i < k; i++) {
    if (!dummyNode.next) {
      arr.push(null)
      continue
    }
    let j = 0
    while (j < div - 1) {
      if (curr) {
        curr = curr.next
      }
      j++
    }
    if (remain > 0) {
      if (curr) {
        curr = curr.next
      }
      remain--
    }
    if (curr) {
      const temp = curr.next
      curr.next = null
      curr = temp
      arr.push(dummyNode.next)
      dummyNode.next = curr
    } else {
      arr.push(dummyNode.next)
      dummyNode.next = null
    }
  }

  return arr
};

const splitListToParts1 = (head, k) => {
  let n = 0
  let temp = head
  while (temp) {
    n++
    temp = temp.next
  }

  let quotient = Math.floor(n / k), remainder = n % k
  const parts = new Array(k).fill(null)
  let curr = head
  for (let i = 0; i < k && curr !== null; i++) {
    parts[i] = curr
    let partSize = quotient + (i < remainder ? 1 : 0)
    for (let j = 1; j < partSize; j++) {
      curr = curr.next
    }
    const next = curr.next
    curr.next = null
    curr = next
  }
}