/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  if (!head) {
    return head
  }

  const arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  let i = 0, j = arr.length - 1
  while (i < j) {
    arr[i].next = arr[j]
    i++
    if (i === j) {
      break
    }
    arr[j].next = arr[i]
    j--
  }
  arr[i].next = null
};


// 方法2，分半合并
const reverseList = (head) => {
  let prev = null, curr = head

  while (curr) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
}

const middleNode = (head) => {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

const mergeList = (left, right) => {
  while (left && right) {
    const tempL = left.next
    const tempR = right.next

    left.next = right
    left = tempL

    right.next = left
    right = tempR
  }
}

const reorderList1 = (head) => {
  if (!head) {
    return head
  }

  let middle = middleNode(head)

  let leftHalf = head
  let rightHalf = middle.next

  // 分离前后
  middle.next = null

  // 翻转右半
  rightHalf = reverseList(rightHalf)

  mergeList(leftHalf, rightHalf)
};