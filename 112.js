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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (!root) {
    return false
  }
  let ans = false
  const pathSum = (node, path) => {
    if (node) {
      path += node.val

      if (!node.left && !node.right) {
        if (path === targetSum) {
          ans = true
        }
        return
      }

      pathSum(node.left, path)
      pathSum(node.right, path)
    }
  }
  pathSum(root, 0)
  return ans
};

const hasPathSum1 = (root, targetSum) => {
  if (!root) {
    return false
  }

  if (!root.left && !root.right) {
    return root.val === targetSum
  }

  return hasPathSum1(root.left, targetSum - root.val) || hasPathSum1(root.right, targetSum - root.val)
}