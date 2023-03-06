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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (!root) {
    return false;
  }
  let ans = false;
  const pathSum = (node, path) => {
    if (node) {
      path += node.val;

      if (!node.left && !node.right) {
        if (path === targetSum) {
          ans = true;
        }
        return;
      }

      pathSum(node.left, path);
      pathSum(node.right, path);
    }
  };
  pathSum(root, 0);
  return ans;
};

const hasPathSum1 = (root, targetSum) => {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return (
    hasPathSum1(root.left, targetSum - root.val) ||
    hasPathSum1(root.right, targetSum - root.val)
  );
};

const hasPathSum2 = (root, targetSum) => {
  if (!root) {
    return false;
  }

  const tree_queue = [];
  const val_queue = [];
  tree_queue.unshift(root);
  val_queue.unshift(root.val);

  while (tree_queue.length) {
    const first_tree = tree_queue.pop();
    const first_val = val_queue.pop();

    if (!first_tree.left && !first_tree.right) {
      if (first_val === targetSum) {
        return true;
      }
    }

    if (first_tree.left) {
      tree_queue.unshift(first_tree.left);
      val_queue.unshift(first_tree.left.val + first_val);
    }

    if (first_tree.right) {
      tree_queue.unshift(first_tree.right);
      val_queue.unshift(first_tree.right.val + first_val);
    }
  }

  return false;
};
