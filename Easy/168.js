/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = "";
    while(n>0){
      let mod = (n-1)%26;
      result = String.fromCharCode(mod+65) + result;
      n = parseInt((n-1)/26);
    }
    return result;
};
console.log(convertToTitle(2));

