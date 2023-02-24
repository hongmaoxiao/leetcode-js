/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = (root) => {
  const arr = []
  loop(arr, root)
  return arr
};

const loop = (arr, node) => {
  if (!node) {
    return
  }
  for (const ch of node.children) {
    loop(arr, ch)
  }
  arr.push(node.val)
}