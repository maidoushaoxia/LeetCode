/*
 * @Author: shaoyun
 * @Date: 2019-09-01 19:26:29
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-01 20:10:21
 * @Description: 四数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) {
      return []
    }
    nums.sort((a, b) => (a - b))
    let len = nums.length
    let res =[]
    for (let i = 0;i < len - 3;i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue
      }
      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
        break
      }
      for (let j = i + 1;j < len - 2;j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue
        }
        let left = j + 1
        let right = len -1
        while (left < right) {
          let sum = nums[i] + nums[j] + nums[left] + nums[right]
          if (sum === target) {
            res.push([nums[i],nums[j],nums[left],nums[right]])
          }
          if (sum <= target){
            while (nums[left] === nums[++left]) {}
          } else {
            while (nums[right] === nums[--right]) {}
          }
        }
      }
    }
    return res
};
