/*
 * @Author: shaoyun
 * @Date: 2019-04-26 10:22:25
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-07 19:28:33
 * @Description: 删除排序数组中的重复项
 */
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

/**
 * @description: 双指针思想
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    let i = 0 // i是慢指针
    for (let j = 1;j < nums.length;j++) { // j是快指针
      // 快指针跳过重复项，若两个指针对应的值不同，则将快指针的值赋给慢指针
      if (nums[i] !== nums[j]) {
        i ++
        nums[i] = nums[j]
      }
    }
    // 最后返回慢指针所在的索引，这样数组就是不重复的了
    return i + 1
};
