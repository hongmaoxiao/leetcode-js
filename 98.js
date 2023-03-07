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
 * @return {boolean}
 */
const isValidBST = (root) => {
  return helper(root, -Number.MAX_VALUE, Number.MAX_VALUE)
};

const helper = (root, lower, upper) => {
  if (root === null) {
    return true
  }

  if (root.val >= upper || root.val <= lower) {
    return false
  }

  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}