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
 * @return {number}
 */
const pathSum = (root, targetSum) => {
  let ans = 0
  if (!root) {
    return 0
  }
  ans += rootSum(root, targetSum)
  ans += pathSum(root.left, targetSum)
  ans += pathSum(root.right, targetSum)
  return ans
};

const rootSum = (node, targetSum) => {
  if (!node) {
    return 0
  }

  let ret = 0
  if (node.val === targetSum) {
    ret++
  }

  ret += rootSum(node.left, targetSum - node.val)
  ret += rootSum(node.right, targetSum - node.val)

  return ret
}

const pathSum1 = (root, targetSum) => {
  const prefix = new Map()
  prefix.set(0, 1)
  return dfs(root, prefix, 0, targetSum)
}

const dfs = (node, prefix, curr, targetSum) => {
  if (!node) {
    return 0
  }

  let ret = 0
  curr += node.val

  ret = prefix.get(curr - targetSum) || 0
  prefix.set(curr, (prefix.get(curr) || 0) + 1)
  ret += dfs(node.left, prefix, curr, targetSum)
  ret += dfs(node.right, prefix, curr, targetSum)
  prefix.set(curr, (prefix.get(curr) || 0) - 1)

  return ret
}