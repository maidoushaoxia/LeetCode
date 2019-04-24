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

