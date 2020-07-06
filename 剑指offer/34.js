/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 二叉树中和为某一值的路径
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var res = []
  var path = []
  recur(root, sum)
  return res

  /**
   * @description: 回溯遍历的函数
   * @param {TreeNode} root
   * @param {number} sum
   * @return {void}
   */  
  function recur(root, sum) {
    if (!root) return
    sum -= root.val
    path.push(root.val)
    if (sum === 0 && !root.left && !root.right) {
      res.push([].concat(path))
    }
    recur(root.left, sum)
    recur(root.right, sum)
    // 剪枝操作
    path.pop()
  }
};