/*
 * @Author: shaoyun
 * @Date: 2019-08-30 21:42:36
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-30 22:38:10
 * @Description: 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let len = nums.length
  if (len < 3) {
    return null
  }
  nums.sort((a, b) => (a - b))
  let res = nums[0] + nums[1] + nums[2]
  for (let i = 0;i < len - 2;i++) {
    let first = i + 1
    let last = len - 1
    while (first < last) {
      let sum = nums[i] + nums[first] + nums[last]
      if (sum === target) {
        return sum
      } else if (sum > target) {
        last--
      } else {
        first++
      }
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }
    }
  }
  return res
};
