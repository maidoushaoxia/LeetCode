/*
 * @Author: shaoyun
 * @Date: 2019-09-11 21:15:14
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-11 22:01:14
 * @Description: 在排序数组中查找元素的第一个和最后一个位置
 * 运用二分查找找到元素
 * 若该元素是第一个数或前面的数小于该数，则为第一个位置；
 * 若该元素是最后一个数或后面的数大于该数，则为最后一个位置；
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = []
  res[0] = binarySerach(nums, target, false)
  res[1] = binarySerach(nums, target, true)
  return res

  function binarySerach(nums, target, tag) {
    if (nums.length === 0) return -1
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
      debugger
      let mid = Math.floor((low + high) / 2)
      if (nums[mid] === target) {
        if (!tag) {
          high = mid - 1
          if (mid === 0 || nums[mid - 1] < nums[mid]) { // 第一次出现的位置
            return mid
          }
        } else {
          low = mid + 1
          if (mid === nums.length - 1 || nums[mid + 1] > nums[mid]) { // 最后一次出现的位置
            return mid
          }
        }
      } else if (nums[mid] < target) {
        low = mid + 1
      } else {
        high = mid -1
      }
    }
    return -1
  }
};
