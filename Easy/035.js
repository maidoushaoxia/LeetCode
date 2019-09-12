/*
 * @Author: shaoyun
 * @Date: 2019-04-26 15:40:43
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-12 20:28:59
 * @Description: 搜索插入位置
 */
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
  }
/**
 * @description: 二分查找法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0
  let high = nums.length - 1
  if (nums[high] < target) return high + 1
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] < target) {
      low = mid + 1 // 左边界排除中位数
    } else {
      high = mid // 右边界不排除中位数
      // 大佬的思想：若左边界排除中位数，则右边界不排除中位数；反正，若右边界排除中位数right = mid - 1，则左边界不排除中位数left = mid
    }
  }
  return low // 最后返回左右边界都对
}
