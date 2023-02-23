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
const postorderTraversal = (root) => {
  const res = []
  loop(root, res)
  return res
};

const loop = (node , arr) => {
  if (!node) {
    return
  }
  loop(node.left, arr)
  loop(node.right, arr)
  arr.push(node.val)
}

const postorderTraversal1 = (root) => {
  const res = []
  const stack = []
  let node = root
  let prev = null
  while (stack.length !== 0 || node !== null) {
    while (node !== null) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    if (node.right === null || node.right === prev) {
      res.push(node.val)
      prev = node
      node = null
    } else {
      stack.push(node)
      node = node.right
    }
  }

  return res
};