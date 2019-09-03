/*
 * @Author: shaoyun
 * @Date: 2019-09-03 21:30:09
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-03 21:40:26
 * @Description: 生成有效的括号
 * 用l,r记录使用了多少左、右括号
 * 左括号小于需要生成的括号时，添加左括号
 * 添加右括号不能超过当前已经被添加的左括号数量
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []  
  function fn (s,l,r) {
    debugger
      if (l === n && r === n) {
        res.push(s)
        return
      }
      if (l < n) {
        fn(s + '(', l + 1,r)
      }
      if (l > r) {
        fn(s + ')',l,r + 1)
      }
    }
    fn('',0,0)
    return res
};
