/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  for(var i=0;i<s.length;i++){ 
    var c = s.charAt(i);
    if(c == "("){
      stack.push(")");
    }else if(c == "["){
      stack.push("]");
    }else if(c == "{"){
      stack.push("}");
    }else {
      if (stack.length == 0){
        return false;
      }
      if(stack.pop() != c){
        return false;
      }
    }
  }
  return stack.length == 0;
};
