/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {num/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 从上到下打印二叉树III(之字形s)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let queue = [root], res = []
  while (queue.length) {
    const len = queue.length
    let childRes = []
    for(let i = 0; i < len; i++) {
      const node = queue.shift()
      childRes.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    if (res.length % 2 === 1) childRes.reverse()
    res.push(childRes)
  }
  return res
}