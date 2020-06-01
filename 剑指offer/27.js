/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 二叉树的镜像
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if (!root) return null

  let temp = root.left
  root.left = root.right
  root.right = temp

  mirrorTree(root.left)
  mirrorTree(root.right)

  return root
};