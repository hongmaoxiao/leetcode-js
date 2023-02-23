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