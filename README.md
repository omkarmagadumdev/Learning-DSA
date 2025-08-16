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
5. Merge Sorted Array
 [🔗](https://leetcode.com/problems/merge-sorted-array/)
```js
var merge = function(nums1, m, nums2, n) {
    let p1 = m -1;
    let p2 = n-1;
    for(let i = m+n-1;i>=0;i--){
        if(p2 <0) break;
        if(p1>=0 && nums1[p1]> nums2[p2]){
            nums1[i] = nums1[p1];
            p1--
        }
        else{
            nums1[i] = nums2[p2]
            p2--
        }
    }
};
```
6. [🔗](https://leetcode.com/problems/move-zeroes/)
```js
 var moveZeroes = function(nums) {
    let x =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[x] = nums[i];
            x++

        }
        
    }
    for(let i =x;i<nums.length;i++){
            nums[i] = 0
        }
};
```
7. [🔗]()
```js
 
```
 