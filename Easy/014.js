/*
 * @Author: shaoyun
 * @Date: 2019-08-15 11:11:18
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-08-22 21:23:51
 * @Description: 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length == 0){
    return "";
  }else if(strs.length == 1){
    return strs[0];
  }else{
    var substr = strs[0];
    for(var i=0;i<strs.length;i++){
      if(!strs[i].startsWith(substr)){
        for(var j =0;j<substr.length;j++){
          if(substr[j] != strs[i][j]){
            substr =  substr.slice(0,j);
          }
        }
      } 
    }
    return substr;
  }
};

/**
 * @description: 
 * @param {string[]} strs 
 * @return: 
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
      return ''
    }
    let res = strs[0]
    for (let i = 1;i < strs.length;i++) {
      let j = 0
      for (;j < strs[0].length;j++) {
        if (strs[i][j] !== strs[0][j]) {
          break
        }
      }
      res = res.substr(0, j)
      if (res === '' ) {
        return res
      }
    }
    return res
};
