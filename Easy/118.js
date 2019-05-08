/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0){
      return [];
    }
    if(numRows == 1){
      return[[1]];
    }
    if(numRows == 2){
      return[[1],[1,1]];
    }

    var result = [[1],[1,1]];
    for(var len =2;len<numRows;len++){
      var arr = [1];
      for(var i=1;i<len;i++){
        arr.push(result[len-1][i-1] + result[len-1][i]);
      }
      arr.push(1);      
      result.push(arr);
    }
    return result;
};
