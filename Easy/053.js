/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length == 0){
      return 0;
    }else{
      var curSum = nums[0];
      var maxSum = nums[0];
      for(var i=1;i<nums.length;i++){
        if(curSum < 0){
          curSum = nums[i];
        }else{
          curSum += nums[i];
        }
        maxSum = Math.max(maxSum,curSum)
    }
    return maxSum;
  }
};
