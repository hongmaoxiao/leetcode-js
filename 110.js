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
// 自顶向下
const isBalanced = (root) => {
  if (!root) {
    return true;
  }

  return (
    Math.abs(depth(root.left) - depth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

const depth = (node) => {
  if (!node) {
    return 0;
  }

  return Math.max(depth(node.left), depth(node.right)) + 1;
};

// 自底向上
const isBalanced1 = (root) => {
  if (!root) {
    return true;
  }

  const depth = node => {
    if (!node) {
      return 0
    }

    const left_depth = depth(node.left)
    const right_depth = depth(node.right)
    if (left_depth === -1 || right_depth === -1 || Math.abs(left_depth - right_depth) > 1) {
      return -1
    }
    return Math.max(left_depth, right_depth) + 1
  }

  return depth(root) > -1
}