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
const inorderTraversal = (root) => {
  const res = []
  loop(root, res)
  return res
};

const loop = (node , arr) => {
  if (!node) {
    return
  }
  loop(node.left, arr)
  arr.push(node.val)
  loop(node.right, arr)
}