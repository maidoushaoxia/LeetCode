/*
 * @Author: shaoyun
 * @Date: 2019-08-19 09:09:17
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-19 12:42:27
 * @Description: 找出无重复字符的最长字串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 存放子串
  let str = ''
  // 记录最长字串的长度
  let maxLength = 0
  //遍历字符串
  for (let i = 0;i < s.length;i++) {
    // 查找该字符
    let index = str.indexOf(s[i])
    // 若str中没有这个字符
    if (index === -1) {
      // 则将这个字符添加到str子串中，并记录当前子串的长度
      str+=s[i]
      // 如果当前长度比子串长，则最大长度为当前长度，否则取字串长度，这一步是为了找到最大值
      maxLength = maxLength > str.length ? maxLength : str.length
    } else {
      // 如果存在该字符，则去掉重复字符前的字符，继续遍历
      str = str.substr(index + 1) + s[i]
    }
  }
  return maxLength
}