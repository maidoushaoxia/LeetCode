/*
 * @Author: shaoyun
 * @Date: 2019-08-15 11:11:18
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-21 12:38:52
 * @Description: 
 */
/**
 * @param {number} x
 * @return {boolean}
 */

 //字符串求解,404ms,45.9MB
var isPalindrome = function(x) {
  if(x ==0){
    return true;
  }else{
    var strArr = x.toString();
    var len = strArr.length;
    var i =0;
    while(i<len-1){
      if(strArr[i] != strArr[len-1-i]){
        return false;
      }else{
        i++;
      }
    }
      return true;
  
  }
  
};

//数字求解,620ms,44.9MB
var isPalindrome = function(x) {
  if(x < 0){
    return false;
  }else if(x == 0){
    return true;
  }else{
    var temp = x;
    var reverse = 0;
    while(temp !=0){
      reverse = reverse * 10 + temp % 10;
      temp = parseInt(temp / 10);
    }
    return x == reverse;
  }
};
console.log(isPalindrome(121));

/**
 * @description: 数组方法,reverse()是修改原数组，可以比较字符串是否相等 ，324ms
 * @param {type} 
 * @return: 
 */
var isPalindrome = function(x) {
  if (x < 0) {
      return false
  }
  let str = x.toString()
  let arr = str.split('')
  return str === arr.reverse().join('') ? true : false
};