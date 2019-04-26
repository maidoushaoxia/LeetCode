/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length == 0){
      return 0;
    }

    var len = nums.length;
    for(var i=0;i<len;i++){
      if(nums[i] == target){
        return i;
      }else if(nums[0] > target){
        return 0;
      }else if(nums[len-1] < target){
        return len;
      }else if(nums[i-1] < target && nums[i] > target){
        return i;
      }
    }
};
