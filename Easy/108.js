/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length == 0){
      return null;
    }
    else{
      return solve(nums,0,nums.length-1);
    }
    
};

function solve(nums,start,end){
    if(start > end){
      return null;
    }
    else{
      var mid = parseInt((start + end + 1)/2);
      var root = new TreeNode(nums[mid]);

      root.left = solve(nums,start,mid-1);
      root.right = solve(nums,mid+1,end);

      return root;
    }
    
}
