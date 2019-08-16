/*
 * @Author: shaoyun
 * @Date: 2019-08-15 13:45:43
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-15 13:59:41
 * @Description: 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 let result = 0
 while (x !== 0) {
  result = result * 10 + x % 10
  x = parseInt(x/10)
 }
 if (result < -Math.pow(2,31) || result > Math.pow(2,31) - 1) {
   result = 0
 }
 return result
};


