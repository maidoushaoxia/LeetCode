/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs == null || strs.length == 0){
    return "";
  }else if(strs.length == 1){
    return strs[0];
  }else{
    var substr = strs[0];
    var len = strs[0].length;
    for(var i=0;i<strs.length;i++){
      len = Math.min(len,strs[i].length)
      if(!strs[i].startsWith(substr)){
        for(var j =0;j<len;j++){
          if(substr[j] != strs[i][j]){
            substr =  substr.slice(0,j);
          }
        }
      } 
    }
    return substr;
  }
};

