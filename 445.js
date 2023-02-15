/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const reverse1 = reverseList(l1)
  const reverse2 = reverseList(l2)

  const res = sequenceAddTwoNumbers(reverse1, reverse2)
  return reverseList(res)
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

const sequenceAddTwoNumbers = (l1, l2) => {
  let dummyNode = new ListNode(-1)
  let prev = dummyNode

  let curr1 = l1
  let curr2 = l2

  let add = 0

  while (curr1 !== curr2) {
    const val1 = curr1 ? curr1.val : 0
    const val2 = curr2 ? curr2.val : 0
    
    let sum = val1 + val2 + add
    if (sum >= 10) {
      sum -= 10
      add = 1
    } else {
      add = 0
    }

    prev.next = new ListNode(sum)
    prev = prev.next

    curr1 = curr1 ? curr1.next : null
    curr2 = curr2 ? curr2.next : null
  } 

  if (add === 1) {
    prev.next = new ListNode(add)
  }

  return dummyNode.next
}

const addTwoNumbers1 = (l1, l2) => {
  const arr1 = []
  const arr2 = []

  while (l1) {
    arr1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    arr2.push(l2.val)
    l2 = l2.next
  }

  let end = null
  let carry = 0

  while (arr1.length > 0 || arr2.length > 0 || carry !== 0) {
    const val1 = arr1.length > 0 ? arr1.pop() : 0
    const val2 = arr2.length > 0 ? arr2.pop() : 0

    let sum = val1 + val2 + carry
    if (sum >= 10) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }

    const newNode = new ListNode(sum)
    newNode.next = end
    end = newNode
  }

  return end
};