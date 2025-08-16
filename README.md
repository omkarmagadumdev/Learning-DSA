# Namaste DSA

# Arrays - Easy/Medium

1. Remove Duplicates from Sorted Array [🔗](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

```js
var removeDuplicates = function(nums) {
    let x =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > nums[x]){
        x = x + 1;
        nums[x] = nums[i]
        }
    }
    return (x+1)
};
```
2. Remove Element [🔗](https://leetcode.com/problems/remove-element/description/)
```js

var removeElement = function(nums, val) {
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[x] = nums[i];
            x = x+1
            
        }
        
    }
 return x
};
```
3. Reverse String  [🔗](https://leetcode.com/problems/reverse-string/description/)
```js
var reverseString = function(s) {
    let len = s.length;
    let halflen = [len/2];
    for(let i =0;i<halflen;i++){
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp
    }
};
```
4.  Best Time to Buy and Sell Stock [🔗](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/) 
```js
var maxProfit = function(prices) {
  let min = prices[0];
  let maxprofit = 0;
  for(let i=1;i<prices.length;i++){
        if(prices[i]-min>maxprofit){
            maxprofit = prices[i]-min;


        }
        if(prices[i]<min){
            min = prices[i]
        }
  }
  return maxprofit
};
```
