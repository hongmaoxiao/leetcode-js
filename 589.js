/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = (root) => {
  const arr = []
  loop(arr, root)
  return arr
};

const loop = (arr, node) => {
  if (!node) {
    return
  }
  arr.push(node.val)
  for (const ch of node.children) {
    loop(arr, ch)
  }
}

const preorder1 = (root) => {
  if (!root) {
    return []
  }
  const ans = []
  const stack = []
  const nextIndex = new Map()
  let curr = root
  while (stack.length || curr) {
    while (curr) {
      ans.push(curr.val)
      stack.push(curr)
      if (!curr.children) {
        break
      }
      nextIndex.set(curr, 1)
      curr = curr.children[0]
    }

    curr = stack[stack.length - 1]
    const i = nextIndex.get(curr)
    if (i < curr.children.length) {
      nextIndex.set(curr, i + 1)
      curr = curr.children[i]
    } else {
      stack.pop()
      nextIndex.delete(curr)
      curr = null
    }
  }

  return ans
};