/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
  const res = []
  loop(root, res)
  return res
};

const loop = (node , arr) => {
  if (!node) {
    return
  }
  arr.push(node.val)
  loop(node.left, arr)
  loop(node.right, arr)
}

const preorderTraversal1 = (root) => {
  const res = []
  if (!root) {
    return res
  }
  const stack = []
  let node = root

  while (stack.length !== 0 || node !== null) {
    while (node !== null) {
      res.push(node.val)
      stack.push(node)
      node = node.left
    }

    node = stack.pop()
    node = node.right
  }
};

const preorderTraversal2 = (root) => {
  const res = []
  if (!root) {
    return res
  }
  let p1 = root, p2 = null

  while (p1 !== null) {
    p2 = p1.left
    if (p2 !== null) {
      while (p2.right !== null && p2.right !== p1) {
        p2 = p2.right
      }
      if (p2.right === null) {
        res.push(p1.val)
        p2.right = p1
        p1 = p1.left
        continue
      } else {
        p2.right = null
      }
    } else {
      res.push(p1.val)
    }
    p1 = p1.right
  }

  return res
};