/*
 * @Author: shaoyun
 * @Date: 2019-08-20 09:24:22
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-20 09:55:44
 * @Description: 字符串转整数
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 字符串自带的api就可以，若开头不是数字，则转换为NaN。
  let result = parseInt(str)
  if (result < -Math.pow(2,31)){
      return -Math.pow(2,31)
  }
 if (result > Math.pow(2,31) - 1) {
     return Math.pow(2,31) - 1
 }
    return !result ? 0 : result
}

/**
 * @description: 正则解法
 * @param {string} str
 * @return: {number}
 */
var myAtoi = function(str) {
  // 匹配开头为-或+或没有，然后多次匹配数字。但结果是一个数组
  let reg = /^(-|\+)?\d+/g
  // 将数组转换为数字
  let result = parseInt(str.match(reg)[0])
  if (result < -Math.pow(2,31)){
    return -Math.pow(2,31)
  }
  if (result > Math.pow(2,31) - 1) {
    return Math.pow(2,31) - 1
  }
  return !result ? 0 : result
}