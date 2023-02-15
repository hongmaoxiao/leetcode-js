/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  const map = new Map()
  let currA = headA
  let currB = headB

  while (currA) {
    map.set(currA, 1)
    currA = currA.next
  }

  while (currB) {
    if (map.has(currB)) {
      return currB
    }
    currB = currB.next
  }

  return null
};

const getIntersectionNode1 = (headA, headB) => {
  if (!headA || !headB) {
    return null
  }

  let pa = headA
  let pb = headB

  while (pa !== pb) {
    pa = pa === null ? headB : pa.next
    pb = pb === null ? headA : pb.next
  }

  return pa
}