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
 * @return {number[]}
 */
const postorderTraversal = (root) => {
  const res = []
  loop(root, res)
  return res
};

const loop = (node , arr) => {
  if (!node) {
    return
  }
  loop(node.left, arr)
  loop(node.right, arr)
  arr.push(node.val)
}

const postorderTraversal1 = (root) => {
  const res = []
  const stack = []
  let node = root
  let prev = null
  while (stack.length !== 0 || node !== null) {
    while (node !== null) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    if (node.right === null || node.right === prev) {
      res.push(node.val)
      prev = node
      node = null
    } else {
      stack.push(node)
      node = node.right
    }
  }

  return res
};

const postorderTraversal2 = (root) => {
  const res = []
  if (!root) {
    return res
  }
  let p1 = root, p2 = null
  while (p1 !== null) {
    p2 = p1.left
    if (p2 !== null) {
      while (p2.right !== null && p2.right !== p1) {
        p2 = p2.right
      }
      if (p2.right === null) {
        p2.right = p1
        p1 = p1.left
        continue
      } else {
        p2.right = null
        addPath(res, p1.left)
      }
    }
    p1 = p1.right
  }
  addPath(res, root)
  return res
};

const addPath = (arr, node) => {
  let count = 0
  while (node !== null) {
    ++count
    arr.push(node.val)
    node = node.right
  }
  let left = arr.length - count, right = arr.length - 1
  while (left < right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
}