/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    if (!head || !head.next) {
      return null
    }

    const visited = new Set()
    while (head !== null) {
      if (visited.has(head)) {
        return head
      }
      visited.add(head)
      head = head.next
    }

    return null
};