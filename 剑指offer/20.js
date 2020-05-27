/**
 * @description 表示数值的字符串
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  if (s.trim() === '') return false
  return !isNaN(s)
};