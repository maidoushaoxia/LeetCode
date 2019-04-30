/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root == null){
      return [];
    }

    var result = [];
    var queue = [];
    queue.push(root);

    while(queue.length != 0){
      var arr = [];
      var len = queue.length          //一定要用变量保存,否则长度不会变化
      for(var i=0;i<len;i++){
        var curNode = queue.shift();
        arr.push(curNode.val);
        if(curNode.left != null){
          queue.push(curNode.left);
        }
        if(curNode.right != null){
          queue.push(curNode.right);
        }
      }
      result.unshift(arr);
    }
   
    return result;
};
