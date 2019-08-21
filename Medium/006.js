/*
 * @Author: shaoyun
 * @Date: 2019-08-20 09:22:50
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-20 09:23:42
 * @Description: Z字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // 存放字符串的数组
  let arr = []
  // 判断是否递增状态
  let add = true
  // 记录当前下标，范围为0~numRows-1
  let count = 0
  // 若numRows为1，则直接返回字符串
  if (numRows === 1) {
      return s
  }
  // 遍历字符串
  for (let i = 0;i<s.length;i++) {
      // 第一次向下遍历时，直接将字符添加到数组中即可；第二次开始需要拼接字符串
      arr[count] = arr[count] ? arr[count] + s[i] : s[i]
      // 遍历到最上面，则count开始递增
      if (count === 0) {
          add = true
      }
      // 遍历到最下面，count开始递减
      if (count === numRows - 1) {
          add = false
      }
      count = add ? count + 1 : count - 1
  }
  // 返回字符串
  return arr.join('')
};