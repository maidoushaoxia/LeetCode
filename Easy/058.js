/**
 * @param {string} s
 * @return {number}
 */
  var lengthOfLastWord = function(s) {
    var str = s.trim();
    if(str.length == 0){
      return 0;
    }
   var arr = str.split(" ");
   var len = arr.length;
   return arr[len-1].length; 
};
