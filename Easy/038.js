/*
 * @Author: shaoyun
 * @Date: 2019-04-26 15:59:59
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-13 17:12:00
 * @Description: 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n<0){
    return null;
  }
  if(n == 1){
    return "1";
  }
  var result = "1";
  for(var i=1;i<n;i++){
    var str= "";
    var count = 1;
    for(var j=0;j<result.length;j++){
      if(result[j] == result[j+1]){
        count++;
      }else{
        str += count + result[j];
        count = 1;
      }
    }
    result = str;
  }
  return result;
};

/**
 * @description: 递归版
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n === 1) {
    return '1'
  } else {
    let str = countAndSay(n - 1) // 递归
    let temp = str[0] // 保存第一个数
    let count = 0 // 计数
    let res = '' // 结果
    for (let i = 0;i < str.length;i++) {
      if (str[i] === temp) { // 若当前值与第一个数的相同
        count ++
      } else { // 遇到不同的数了
        res += count + temp // 保存上次结果
        temp = str[i] // 对新数进行报数
        count = 1 // 重置计数器
      }
      if (i === str.length - 1) res += count + temp // 遍历到最后只剩一位时
    }
    return res
  }
}
