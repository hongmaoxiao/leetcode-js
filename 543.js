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
const diameterOfBinaryTree = (root) => {
  let ans = 1

  const depth = (node) => {
    if (!node) {
      return 0
    }

    let left_depth = depth(node.left)
    let right_depth = depth(node.right)

    const sum = left_depth + right_depth + 1
    if (sum > ans) {
      ans = sum
    }

    return Math.max(left_depth, right_depth) + 1
  }

  depth(root)

  return ans - 1
};