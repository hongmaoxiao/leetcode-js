/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  let ans
  const dfs = (root, p, q) => {
    if (!root) {
      return false
    }
    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root
    }
    return lson || rson || (root.val === p.val || root.val === q.val)
  }
  dfs(root, p, q)
  return ans
};

// 哈希存储父节点
const lowestCommonAncestor1 = (root, p, q) => {
  const father = new Map()
  const visited = new Map()
  
  const dfs = (root) => {
    if (root.left) {
      father.set(root.left.val, root)
      dfs(root.left)
    }

    if (root.right) {
      father.set(root.right.val, root)
      dfs(root.right)
    }
  }
 
  father.set(root.val, null)
  dfs(root)
  while (p) {
    visited.set(p.val, true)
    p = father.get(p.val)
  }

  while (q) {
    if (visited.has(q.val)) {
      return q
    }
    q = father.get(q.val)
  }

  return null
};