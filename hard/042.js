/*
 * @Author: shaoyun
 * @Date: 2019-09-15 21:33:06
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-15 22:18:19
 * @Description: 接雨水
 * 思路：在一个位置能容下的雨水量等于它左右两边柱子最大高度的最小值减去它的高度.
 */
/**
 * @description: 动态规划——找出左右墙的最大高度
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var sum = 0
    var len = height.length
    var maxLeft = 0
    var maxRight = []
    maxRight[len - 1] = height[len - 1] // 这个代码如果不写，maxRight数组直接向后添加项
    // 求右边最高的墙
    for (let i = len - 2;i >= 0;i--) {
      maxRight[i] = Math.max(maxRight[i + 1],height[i + 1])
    }
    // 求左边最高的墙
    for (let i = 1;i < len;i++) {
      maxLeft = Math.max(maxLeft, height[i - 1])
      let min = Math.min(maxLeft, maxRight[i]) // 求出较小值
      if (height[i] < min) {
        sum += min - height[i]
      }
    }
    return sum 
};


/**
 * @description: 双指针方法——左边墙的最大值大于右边墙，从左往右遍历；否则从右往左
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var sum = 0
  var len = height.length
  var maxLeft = 0
  var maxRight = 0
  let left = 1,right = len - 2
  for (let i = 1;i < len - 1;i++) {
    // 只要height[left - 1] < height[right + 1]，则能保证maxLeft < maxRight
    if (height[left - 1] < height[right + 1]) { // 从左向右遍历
      maxLeft = Math.max(maxLeft, height[left - 1])
      if (height[left] < maxLeft) {
        sum += maxLeft - height[left]
      }
      left++
    } else { // 从右向左遍历
      maxRight = Math.max(maxRight, height[right + 1])
      if (height[i] < maxRight) {
        sum += maxRight - height[right]
      }
      right--
    }
  }
  return sum
}
