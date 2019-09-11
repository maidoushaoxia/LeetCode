/*
 * @Author: shaoyun
 * @Date: 2019-09-08 20:30:46
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-11 20:01:59
 * @Description: 下一个排列
 * 字典序：[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
 * 以[1,3,2]为例
 * 从右往左，找到第一个数，该数的下一个值大于它；// 1
 * 然后从右往左，找到第一个大于该数的值； // 2
 * 交换这两个值，// [2,3,1]
 * 并将该左值(不包含)右边的进行从小到大进行排序(原来为降序，只需要改为升序) // [2,1,3]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length === 0) {
    return []
  }
  if (nums.length === 1) {
    return nums
  }

  for (let i = nums.length - 2;i >= 0;i--) {
    if (nums[i] < nums[i + 1]) { // 找第一个比右值小的数nums[i]
      for (let j = nums.length - 1; j > i;j--) {
        if (nums[j] > nums[i]) { // 找第一个比该数大的数nums[j]
          [nums[i], nums[j]] = [nums[j], nums[i]] // 交换这两个数
          break
        }
      }
      // 将该值右边的数升序排列，用冒泡排序
      for (let k = i + 1;k < nums.length - 1;k++) {
        for (let m = i + 1;m < nums.length - 1;m++) {
          if (nums[m] > nums[m + 1]) {
            [nums[m], nums[m + 1]] = [nums[m + 1], nums[m]]
          }
        }
      }
      return nums
    }
  }
  // 如果本身就是降序排列了，则说明是最后一个排列，此时应返回第一个排列，即升序排列
  nums.reverse()
  return nums
};

