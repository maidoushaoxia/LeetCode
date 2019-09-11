/*
 * @Author: shaoyun
 * @Date: 2019-09-11 20:07:47
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-11 21:14:49
 * @Description: 搜索旋转排序数组
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1
  let low = 0
  let high = nums.length - 1  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
  
    if (nums[mid] === target) return mid

    if (nums[low] <= nums[mid]) { // 说明左半部分有序
      if (target >= nums[low] && target < nums[mid]) { // 目标值小于mid，则去左半边查找
        high = mid - 1
      } else {
        low = mid + 1
      }
    } else { // 说明右半边有序
      if (target <= nums[high] && target > nums[mid]) { // 目标值大于mid，去右半边找
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
  return -1
};
