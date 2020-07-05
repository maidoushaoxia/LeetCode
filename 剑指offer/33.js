/**
 * @description 二叉搜索树的后序遍历
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  return recur(postorder, 0, postorder.length - 1)
  /**
   * @description: 二叉搜索树递归函数
   * @param {number[]} postorder 
   * @param {number} i 
   * @param {number} j 
   * @return {boolean}
   */    
  function recur(postorder, i, j) {
    // 递归出口：i>=j
    if (i >= j) return true
    // 找到根节点，此时左子树肯定都是小于根节点的，满足二叉搜索树
    let p = i
    while (postorder[p] < postorder[j]) p++
    // 判断右子树是不是二叉搜索树
    let m = p
    while(postorder[p] > postorder[j]) p++
    // 递归判断左右子树
    return p === j && recur(postorder, i, m -1) && recur(postorder, m, j - 1)
  }
};

