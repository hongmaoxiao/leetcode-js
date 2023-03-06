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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
  const ans = []
  preorderTraversal(root, ans)
  const len = ans.length
  for (let i = 1; i < len; i++) {
    const prev = ans[i - 1], curr = ans[i];
    prev.left = null
    prev.right = curr    
  }
};

const preorderTraversal = (root, list) => {
  if (root) {
    list.push(root)
    preorderTraversal(root.left, list)
    preorderTraversal(root.right, list)
  }
}

// 迭代+直接指向
const flatten1 = (root) => {
  if (!root) {
    return
  }
  const stack = []
  stack.push(root)
  let prev = null
  while (stack.length) {
    const curr = stack.pop()
    if (prev !== null) {
      prev.left = null
      prev.right = curr
    }
    if (curr.right) {
      stack.push(curr.right)
    }
    if (curr.left) {
      stack.push(curr.left)
    }
    prev = curr
  }
}

// O(1)
const flatten2 = (root) => {
  let curr = root
  while (curr) {
    if (curr.left !== null) {
      const next = curr.left
      let predecessor = next
      while (predecessor.right) {
        predecessor = predecessor.right
      }
      predecessor.right = curr.right
      curr.left = null
      curr.right = next
    }
    curr = curr.right
  }
}