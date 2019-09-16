/*
 * @Author: shaoyun
 * @Date: 2019-09-16 17:19:50
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-16 17:20:43
 * @Description: 有序队列
 */
var orderlyQueue = function(S, K) {
  let res = S
  if (S.length === 1) return S
  if (K === 1) {
    for (let i = 0;i < S.length;i++) {
      let temp = S.substr(i,S.length - 1) + S.substr(0, i)
      if (temp <= res) res = temp
    }
  } else {
    res = S.split('').sort().join('')
  }
  return res
};
