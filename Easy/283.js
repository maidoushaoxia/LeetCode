/*
 * @Author: shaoyun
 * @Date: 2019-09-20 10:55:55
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-20 12:19:17
 * @Description: 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length
  if (len === 0) return []
  let i = 0
  while (i < len) {
    if (nums[i] === 0) {
      nums.push(0)
      nums.splice(i, 1)
      len --
    } else {
      i++
    }
  }
};
