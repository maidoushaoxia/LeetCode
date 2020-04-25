/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description: 重建二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null

  const rootVal = preorder[0]
  let node = new TreeNode(rootVal)

  let i = inorder.indexOf(rootVal)

  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))

  return node
};