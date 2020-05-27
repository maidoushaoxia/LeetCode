/**
 * @description 调整数组顺序使奇数位于偶数前面
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  // 奇偶双指针
  let i = 0, j = nums.length - 1
  while(i < j) {
    // 找到左边第一个偶数
    while (nums[i] % 2 === 1) {
      i ++
    }
    // 找到右边第一个奇数
    while (nums[j] % 2 === 0) {
      j --
    }
    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  return nums
};