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
// 快慢指针法
const middleNode = (head) => {
  let fast = head
  let slow = head

  while (fast.next !== null) {
    if (fast.next.next !== null) {
      fast = fast.next.next
    } else {
      fast = fast.next
    }
    slow = slow.next
  }

  return slow
};

// 数组法
const middleNode1 = (head) => {
  let arr = [head]

  while (arr[arr.length - 1].next !== null) {
    arr.push(arr[arr.length - 1].next)
  }

  return arr[Math.trunc(arr.length / 2)]
};

// 单指针法
const middleNode2 = (head) => {
  let n = 0
  let curr = head

  while (curr !== null) {
    n++
    curr = curr.next
  }

  let k = 0
  curr = head

  while (k < Math.trunc(n / 2)) {
    k++
    curr = curr.next
  }

  return curr
};