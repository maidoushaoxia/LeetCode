/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 树的子结构
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!A || !B) return false
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

/**
 * @description 判断树A是否包含树B
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function recur(A, B) {
  if (!B) return true
  if (!A || A.val !== B.val) return false
  return recur(A.left, B.left) && recur(A.right, B.right)
}