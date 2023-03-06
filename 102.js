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
const levelOrder = (root) => {
  const ans = [];
  if (!root) {
    return ans;
  }
  const queue = [];
  queue.unshift(root);
  while (queue.length) {
    const len = queue.length;
    ans.push([]);
    for (let i = 1; i <= len; i++) {
      const node = queue.pop();
      ans[ans.length - 1].push(node.val);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
  }
  return ans;
};
