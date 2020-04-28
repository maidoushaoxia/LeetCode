/**
 * @description: 旋转数组的最小数字
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  // 寻找右排序数组的首个元素
  let i = 0, j = numbers.length - 1
  while(i !== j) {
    let m = Math.floor((i + j) / 2)
    if (numbers[m] > numbers[j]) {
      // m在左排序数组中，旋转点在[m+1, j]中
      i = m + 1
    } else if (numbers[m] < numbers[j]) {
      // m在右排序数组中，旋转点在[i, m]中
      j = m
    } else if (numbers[m] === numbers[j]) {
      // 无法判断m在那个数组
      j --
    }
  }
  return numbers[i]
};