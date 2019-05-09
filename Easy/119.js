/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex == 0){
    return [1];
  }
  if(rowIndex == 1){
    return [1,1];
  }

  var result = [1];
  var arr = getRow(rowIndex-1);
  for(var i=1;i<rowIndex;i++){
    result[i] = arr[i-1] + arr[i];
  }
  result.push(1);      

  return result;
};

