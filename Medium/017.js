/*
 * @Author: shaoyun
 * @Date: 2019-08-31 20:31:02
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-31 21:45:19
 * @Description: 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let obj = {
      '2': ['a','b','c'],
      '3': ['d','e','f'],
      '4': ['g','h','i'],
      '5': ['j','k','l'],
      '6': ['m','n','o'],
      '7': ['p','q','r','s'],
      '8': ['t','u','v'],
      '9': ['w','x','y','z']
    }
    if (digits === ''){
      return []
    }
    if (digits.length === 1) {
      return obj[digits]
    } else {
      debugger
      var res = obj[digits[0]]
      digits = digits.substring(1)
      digits.split('').forEach(function (digit) {
        var arr = []
        obj[digit].forEach(function (letter) {
          arr = arr.concat(res.map(function (item) {
            return item + letter
          }))
        })
        res = arr
      })
      return res
    }
};
