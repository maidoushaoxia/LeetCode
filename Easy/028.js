/*
 * @Author: shaoyun
 * @Date: 2019-04-26 11:13:50
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-08 18:50:49
 * @Description: 实现strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == "") {
      return 0;
    }
    return haystack.indexOf(needle);
};

/**
 * @description: 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0
  for (let i = 0;i < haystack.length;i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle)
      return i
    }
  }
  return -1
}
