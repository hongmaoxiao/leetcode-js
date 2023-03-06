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
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  const ans = []
  const backtrack = (node, path) => {
    if (node) {
      path = `${path}${node.val}`

      if (!node.left && !node.right) {
        ans.push(path)
      } else {
        path = `${path}->`
        backtrack(node.left, path)
        backtrack(node.right, path)
      }
    }
  }

  backtrack(root, '')
  return ans
};