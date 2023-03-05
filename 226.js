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
 * @return {TreeNode}
 */
// 深度优先搜索
const invertTree = (root) => {
  if (!root) {
    return null
  }

  const temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
};

// 广度优先搜索
const invertTree1 = (root) => {
  if (!root) {
    return null
  }

  const queue = []
  queue.unshift(root)
  while (queue.length) {
    const curr = queue.pop()
    const temp = curr.left
    curr.left = curr.right
    curr.right = temp

    if (curr.left) {
      queue.unshift(curr.left)
    }

    if (curr.right) {
      queue.unshift(curr.right)
    }
  }

  return root
};