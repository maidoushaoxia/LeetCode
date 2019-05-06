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
var isBalanced = function(root) {
    if(root == null){
      return true;
    }
    
    var left = depth(root.left);
    var right = depth(root.right);

    if(left - right > 1 || right - left > 1){
      return false;
    }
    else{
      return isBalanced(root.left) && isBalanced(root.right);
    }
};

function depth(n){
    if(n == null){
      return 0;
    }
    if(n.left == null && n.right == null){
      return 1;
    }
    else{
      var left = depth(n.left);
      var right = depth(n.right);

      return 1 + (left > right ? left : right);
    }
}
