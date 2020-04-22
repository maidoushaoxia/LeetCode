/**
 * @description: 找出数组中重复的数字
 * @param {Number[]}: nums 
 * @return {Number}: 重复的数字
 */
var findRepeatNumber = function(nums) {
  var map = new Map()
  for(let i = 0; i < nums.length;i++) {
      if(!map.get(nums[i])) {
          map.set(nums[i], true)
      } else {
          return nums[i]
      }
  }
};