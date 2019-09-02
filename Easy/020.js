/*
 * @Author: shaoyun
 * @Date: 2019-04-24 09:12:54
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-02 20:22:38
 * @Description: 匹配括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  for(var i=0;i<s.length;i++){ 
    var c = s.charAt(i);
    if(c == "("){
      stack.push(")");
    }else if(c == "["){
      stack.push("]");
    }else if(c == "{"){
      stack.push("}");
    }else {
      if (stack.length == 0){
        return false;
      }
      if(stack.pop() != c){
        return false;
      }
    }
  }
  return stack.length == 0;
};

/**
 * @description: 官方思路
 * @param {string} s
 * @return {Boolean}
 */
function isValid (s) {
  if (s.length % 2) {
    return false
  }
  let stack = []
  let map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let i = 0;i < s.length;i++) {
    if (!map[s[i]]) {
      stack.push(s[i])
    } else if (map[s[i]] !== stack.pop()) {
      return false
    }
  }
  return stack.length === 0
}
