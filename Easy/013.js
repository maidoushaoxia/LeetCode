/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var result = 0;
  for(var i=0;i < s.length ;i++){
    var c = s.charAt(i);
    switch(c){
      case 'I':
        result +=1;
        break;
      case "V":
        result +=5;
        break;
      case "X":
        result +=10;
        break;
      case "L":
        result +=50;
        break;
      case "C":
        result +=100;
        break;
      case "D":
        result +=500;
        break;
      case "M":
        result +=1000;
        break;
    }
  }

  if(s.search("IV") != -1){
    result -= 2;
  }
  if(s.search("IX") != -1){
    result -= 2;
  }
  if(s.search("XL") != -1){
    result -= 20;
  }
  if(s.search("XC") != -1){
    result -= 20;
  }
  if(s.search("CD") != -1){
    result -= 200;
  }
  if(s.search("CM") != -1){
    result -= 200;
  }

  return result;
};
