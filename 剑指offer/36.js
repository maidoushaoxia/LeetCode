/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @description 二叉搜索树与双向链表
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  let pre = null
  let head = null
  if (!root) return null
  dfs(root)
  // 头节点与尾节点的相互指向
  head.left = pre
  pre.right = head

  return head
  /**
   * @description 中序遍历的递归函数
   * @param {Node} cur
   * @return {Node}
   */  
  function dfs(cur) {
    // 递归出口
    if (cur === null) return
    dfs(cur.left)
    if (pre !== null) {
      pre.right = cur
    } else {
      // cur左侧没有节点，则cur为头节点
      head = cur
    }
    cur.left = pre
    // 一个迭代结束，pre指向当前节点cur
    pre = cur
    dfs(cur.right)
  }
};