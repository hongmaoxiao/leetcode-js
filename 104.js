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
 * @return {number}
 */
const maxDepth = (root) => {
  let sum = 0

  const backtrack = (node, curr) => {
    if (!node) {
      if (curr > sum) {
        sum = curr
      }
      return 
    }

    curr += 1
    backtrack(node.left, curr)
    backtrack(node.right, curr)
    curr -= 1
  }

  backtrack(root, 0)

  return sum
};


const maxDepth1 = (root) => {
  if (!root) {
    return 0
  }

  return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1
}