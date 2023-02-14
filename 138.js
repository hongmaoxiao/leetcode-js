/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head, cachedNode = new Map()) => {
    if (!head) {
      return head
    }

    if (!cachedNode.has(head)) {
      cachedNode.set(head, {val: head.val})
      Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }

    return cachedNode.get(head)
};

const copyRandomList1 = (head) => {
  if (!head) {
    return head
  }

  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next, null)
    node.next = nodeNew
  }

  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = node.next
    nodeNew.random = node.random ? node.random.next : null
  }

  const newHead = head.next
  for (let node = head; node !== null; node = node.next) {
    const nodeNew = node.next
    node.next = node.next.next
    nodeNew.next = nodeNew.next ? nodeNew.next.next : null
  }

  return newHead
};
