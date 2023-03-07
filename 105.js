/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  const len = inorder.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    map.set(inorder[i], i)
  }
  return loopBuildTree(map, preorder, inorder, 0, len - 1, 0, len - 1)
};

const loopBuildTree = (treemap, preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) => {
  if (preorder_left > preorder_right) {
    return null
  }
  let preorder_root = preorder_left
  let inorder_root = treemap.get(preorder[preorder_root])

  const root = new TreeNode(preorder[preorder_root])
  const left_tree_len = inorder_root - inorder_left

  root.left = loopBuildTree(treemap, preorder, inorder, preorder_left + 1, preorder_left + left_tree_len, inorder_left, inorder_root - 1)
  root.right = loopBuildTree(treemap, preorder, inorder, preorder_left + left_tree_len + 1, preorder_right, inorder_root + 1, inorder_right)
  return root
}

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]