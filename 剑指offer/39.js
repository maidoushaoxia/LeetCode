/**
 * @description 数组中出现次数超过一半的数字
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!nums.length) return null
  let i, most
  let votes = 0
  for (let num of nums) {
    if (votes === 0) most = num
    votes += num === most ? 1 : -1
  }
  return most
};