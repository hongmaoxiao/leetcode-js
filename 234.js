/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  if (!head) {
    return false
  }

  if (head && !head.next) {
    return true
  }

  const arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  for (let i = 0; i < arr.length; i++) {
    if (i > Math.floor(arr.length / 2)) {
      break
    }

    const first = arr[i]
    const last = arr[arr.length - 1 - i]

    if (first !== last) {
      return false
    }
  }

  return true
};

// 方法2
const isPalindrome1 = (head) => {
  const arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }

  return true
};


// 方法3
let front

const recursion = (node) => {
  if (node !== null) {
    if (!recursion(node.next)) {
      return false
    }
    if (front.val !== node.val) {
      return false
    }

    front = front.next
  }

  return true
}

const isPalindrome2 = (head) => {
  front = head
  return recursion(head)
};


// 方法4
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

const endOfFirstHalf = (head) => {
  let fast = head
  let slow = head

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

const isPalindrome3 = (head) => {
  if (head === null) {
    return false
  }

  const firstHalfLast = endOfFirstHalf(head)
  const lastHalfReverse = reverseList(firstHalfLast.next)

  let result = true
  let p = head
  let e = lastHalfReverse

  while (result && e) {
    if (p.val !== e.val) {
      return false
    }
    p = p.next
    e = e.next
  }

  return true
};