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
const rob = (root) => {
  const f = new Map()
  const g = new Map()

  const dfs = node => {
    if (!node) {
      return
    }

    dfs(node.left)
    dfs(node.right)

    f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0))
    g.set(node, Math.max((f.get(node.left) || 0), (g.get(node.left) || 0))
    + Math.max((f.get(node.right) || 0), (g.get(node.right) || 0)))
  }

  dfs(root)
  return Math.max(g.get(root), f.get(root))
};