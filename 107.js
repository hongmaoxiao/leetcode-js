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
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {
  const ans = []
  if (!root) {
    return ans
  }

  const queue = []
  queue.unshift(root)
  while (queue.length) {
    const len = queue.length
    ans.push([])  
    for (let i = 0; i < len; i++) {
      const front = queue.pop()
      ans[ans.length - 1].push(front.val)
      if (front.left) {
        queue.unshift(front.left)
      }
      if (front.right) {
        queue.unshift(front.right)
      }
    }
  }

  return ans.reverse()
};