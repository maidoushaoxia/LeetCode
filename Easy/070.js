/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var result = [];
  result[0] = 1;
  result[1] = 2;
  for(var i=2;i<n;i++){
    result[i] = result[i-1] + result[i-2];
  }
  return result[n-1];
};

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));

