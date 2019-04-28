/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  while(a.length < b.length){
    a = 0 + a;
  }
  while(b.length < a.length){
    b = 0 + b;
  }

  var aStr = a.split("");
  var bStr = b.split("");
  var len = aStr.length;
  var result = [];
  var carry = 0;
  for(var i=len-1;i>=0;i--){
    sum = parseInt(aStr[i]) + parseInt(bStr[i]) + carry; 
    if(sum == 0){
      result[i] = 0;
      carry = 0;
    }else if(sum == 1){
      result[i] = 1;
      carry = 0;
    }else if(sum == 2){
      result[i] = 0;
      carry = 1;
    }else if(sum == 3){
      result[i] = 1;
      carry = 1;
    }
  }
  if(carry == 1){
    result.unshift(1);
  }
  return result.join("");
};

console.log(addBinary("11","1"))
