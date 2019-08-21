/*
 * @Author: shaoyun
 * @Date: 2019-04-23 15:35:03
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-21 20:33:23
 * @Description: 罗马数字转整数倍
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var result = 0;
  for(var i=0;i < s.length ;i++){
    var c = s.charAt(i);
    switch(c){
      case 'I':
        result +=1;
        break;
      case "V":
        result +=5;
        break;
      case "X":
        result +=10;
        break;
      case "L":
        result +=50;
        break;
      case "C":
        result +=100;
        break;
      case "D":
        result +=500;
        break;
      case "M":
        result +=1000;
        break;
    }
  }

  if(s.search("IV") != -1){
    result -= 2;
  }
  if(s.search("IX") != -1){
    result -= 2;
  }
  if(s.search("XL") != -1){
    result -= 20;
  }
  if(s.search("XC") != -1){
    result -= 20;
  }
  if(s.search("CD") != -1){
    result -= 200;
  }
  if(s.search("CM") != -1){
    result -= 200;
  }

  return result;
};

/**
 * @description: 方法二：采用数组解构
 * @param {String} s
 * @return {Number}
 */
var romanToInt = function (s) {
  // 对数组解构赋值
  let arr = []
  arr['I'] = 1
  arr['V'] = 5
  arr['X'] = 10
  arr['L'] = 50
  arr['C'] = 100
  arr['D'] = 500
  arr['M'] = 1000

  let res = 0
  // 遍历字符串
  for (let i = 0;i <s.length;i++) {
    // 若当前字符无下一个字符，则返回现在的结果
    if (!s[i+1]) {
      return res+arr[s[i]]
    }
    // 若当前值比后一个值小，则需要计算
    if (arr[s[i]] < arr[s[i+1]]) {
      res+= arr[s[i+1]] - arr[s[i]]
      i++
    }
    // 否则直接加上当前字符对应的值
    else {
      res+= arr[s[i]]
    }
  }
  return res
}
