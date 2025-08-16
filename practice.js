var buyandseel = function(prices){
  let min = prices[0];
  maxprofit = 0;
  for(let i=1;i<prices.length;i++){
    if(prices[i]-min > maxprofit){
      maxprofit = prices[i]-min;
    }
    if(prices[i] < min){
      min = prices[i];
    }
  }
  return maxprofit
}

let prices = [3,4,1,2,7,2,4,5];
let result = buyandseel(prices);
console.log(result)