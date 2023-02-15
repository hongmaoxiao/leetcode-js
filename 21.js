/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) {
    return null;
  }

  if (!list1 && list2) {
    return list2;
  }

  if (list1 && !list2) {
    return list1;
  }

  let head = 1;
  let curr1 = list1;
  let curr2 = list2;
  if (curr1.val > curr2.val) {
    const temp = curr1;
    curr1 = curr2;
    curr2 = temp;
    head = 2;
  }

  while (curr1 && curr2) {
    const temp1 = curr1.next
    const temp2 = curr2.next

    if (temp1 === null) {
      curr1.next = curr2
      break
    }
    if (curr1.val <= curr2.val && curr2.val <= curr1.next.val) {
      curr1.next = curr2
      curr2.next = temp1
      curr1 = curr2
      curr2 = temp2
    } else {
      curr1 = temp1
    }
  }

  return head === 1 ? list1 : list2;
};

const mergeTwoLists1 = (list1, list2) => {
  const dummyHead = new ListNode(-1)
  let prev = dummyHead

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }

  prev.next = list1 === null ? list2 : list1

  return dummyHead.next
}