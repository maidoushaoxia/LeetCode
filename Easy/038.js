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
