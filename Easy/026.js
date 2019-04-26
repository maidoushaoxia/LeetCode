/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length == 0){
    return 0; 
  }
  var cur = nums[0];
  var next = 1;
  while(next <= nums.length){
    if(nums[next] != cur){
      cur = nums[next];
      next ++;
    }else{
      nums.splice(next,1);
    }
  }
  return nums.length;
};
