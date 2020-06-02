/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 对称的二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  return recur(root.left, root.right)
};

/**
 * @description 判断左右节点是否相等
 * @param {TreeNode} L
 * @param {TreeNode} R
 * @return {boolean}
 */
function recur(L, R) {
  if (!L && !R) return true
  if (!L || !R || L.val !== R.val) return false
  return recur(L.left, R.right) && recur(L.right, R.left)
}