/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 从上到下打印二叉树
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let queue = [root], res = []
  while (queue.length) {
    const node = queue.shift()
    res.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return res
};