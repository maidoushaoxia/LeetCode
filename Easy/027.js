/*
 * @Author: shaoyun
 * @Date: 2019-04-26 10:35:02
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-07 19:53:06
 * @Description: 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length == 0){
      return 0;
    }
    for(var i=0;i<nums.length;i++){
      if(nums[i] == val){
        nums.splice(i,1);
        i --;
      }
    }
    return nums.length;
};

/**
 * @description: 还是双指针思想
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0
    let i = 0
    for (let j = 0;j < nums.length;j++) {
      if (nums[j] !== val) {
        nums[i] = nums[j]
        i ++
      }
    }
    return i
};
