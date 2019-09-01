/*
 * @Author: shaoyun
 * @Date: 2019-08-29 09:21:05
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-29 11:06:04
 * @Description: 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    let len = nums.length
    // 首先对数组排序
    nums = nums.sort((a, b) => (a - b))
    // 保证数组有正负数
    if (nums[0] <= 0 && nums[len - 1] >= 0) {
      let i = 0
      while (i < len - 2) {
        // 若第一个值大于0，则三数之和不可能小于0
        if (nums[i] > 0) break
        let first = i + 1
        let last = len - 1
        while (first < last) {
          // 若三数同符号，则无解
          if (nums[first * nums[last] > 0]) break
          let sum = nums[i] + nums[first] + nums[last]
          if (sum === 0) {
            res.push([nums[i], nums[first], nums[last]])
          }
          if (sum <= 0) {
            while(nums[first] === nums[++first]) {}
          } else {
            while (nums[last] === nums[--last]) {}
          }
        }
        while (nums[i] === nums[++i]) {}
      }
    }
    return res
};
