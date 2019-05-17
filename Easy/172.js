/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var result = 0;
    if(n<5){
      return 0;
    }
    while(n>=5){
      result += parseInt(n/5);
      n = parseInt(n/5)
    }
    return result
};

console.log(trailingZeroes(30));
