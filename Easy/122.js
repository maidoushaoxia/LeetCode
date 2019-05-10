/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    for(var i=0;i<prices.length;i++){
      //只要后一天比前一天大,就卖出.
      if(prices[i+1] > prices[i]){
        maxProfit += prices[i+1] - prices[i];
      }
    }
    return maxProfit;
};

