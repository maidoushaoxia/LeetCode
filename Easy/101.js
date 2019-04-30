/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isSameTree(root,root);
};

function isSameTree(p,q){
  if(p ==null && q ==null){
    return true;
  }
  if(p !=null && q ==null || p ==null && q !=null){
    return false;
  }
  return p.val == q .val && isSameTree(p.left,q.right) && isSameTree(p.right,q.left);

}
