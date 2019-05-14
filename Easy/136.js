/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var result = 0;
  for(let i=0;i<nums.length;i++){
    result ^= nums[i];       //相同的数异或等于0,0与任何数异或都等于那个数.
  }
  return result;
};
