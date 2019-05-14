/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var reg = /[^\w]/g;
    s = s.replace(reg,"");
    if(s.length == 0){
      return true;
    }

    var start = 0;
    var end = s.length-1;
    while(start < end){
      if(s[start].toLowerCase() !== s[end].toLowerCase()){
        return false;
      }
      start ++;
      end --;
    }
    return true;
};

console.log(isPalindrome( "race a car"));
