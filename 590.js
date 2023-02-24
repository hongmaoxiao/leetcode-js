/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = (root) => {
  const arr = []
  loop(arr, root)
  return arr
};

const loop = (arr, node) => {
  if (!node) {
    return
  }
  for (const ch of node.children) {
    loop(arr, ch)
  }
  arr.push(node.val)
}

const postorder1 = (root) => {
  const res = []
  if (!root) {
    return res
  }
  const nextIndex = new Map()
  const stack = []
  let node = root
  while (stack.length || node) {
    while (node) {
      stack.push(node)
      if (!node.children) {
        break
      }
      nextIndex.set(node, 1)
      node = node.children[0]
    }

    node = stack[stack.length - 1]
    const i = nextIndex.get(node)
    if (i < node.children.length) {
      nextIndex.set(node, i + 1)
      node = node.children[i]
    } else {
      res.push(node.val)
      stack.pop()
      nextIndex.delete(node)
      node = null
    }
  }

  return res
}

const postorder2 = (root) => {
  const res = []
  if (!root) {
    return res
  }
  const stack = []
  const visited = new Set()
  stack.push(root)
  while (stack.length) {
    const node = stack[stack.length - 1]
    if (node.children.length === 0 || visited.has(node)) {
      stack.pop()
      res.push(node.val)
      continue
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
    visited.add(node)
  }

  return res
}