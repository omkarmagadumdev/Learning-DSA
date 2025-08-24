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
6. Move Zeroes [🔗](https://leetcode.com/problems/move-zeroes/)
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
7. Max Consecutive Ones [🔗](https://leetcode.com/problems/max-consecutive-ones/description/)
```js
 var findMaxConsecutiveOnes = function(nums) {
    let currcount =  0;
    let maxcount = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 1){
            currcount ++
        }
        else{
            maxcount = Math.max(currcount,maxcount);
            currcount =0;
        }

    }
    return Math.max(currcount,maxcount)
};
```
 
8. Missing Number [🔗](https://leetcode.com/problems/missing-number/description/)
```js
var missingNumber = function(nums) {
    let n = nums.length;
    let totalsum = n*(n+1)/2
    let partialsum =0;
    for(let i=0;i<nums.length;i++){
        partialsum = partialsum + nums[i]
    }
    return  totalsum - partialsum
};
```
9. Single Number [🔗](https://leetcode.com/problems/single-number/description/)
```js
//not optimized 
 var singleNumber = function(nums) {
    let hash = {};
    for(let i=0;i<nums.length;i++){
       if(!hash[nums[i]]) {
        hash[nums[i]] =1;

       }
       else{
        hash[nums[i]]++
       }
    }
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]==1){
            return nums[i]
        }
    }
};
//optimized solution using bitwise zor for removing non duplicate number from and array 

var singleNumber = function(nums) {
    let xor =0;
    for(let i=0;i<nums.length;i++){
        xor = xor ^ nums[i];
    }
    return xor;
};



```

# Recursion Easy/Medium

1. print  n to 1 using recursion
```js

function print(n){
    if(n<1) return;
    console.log(n);
    print(--n)
}
print(10)

```
2. print 1 to n using recursion
```js 
   let  n = 10;
function print(x) {
    if (x > n) return;
    console.log(x);
    print(++x);
}

print(1)
```
3. sum of first  n numbers using recursion
```js
function sum(n){
    if(n<1) return 0;
    return n+sum(n-1);
}
console.log(sum(n));

```
4. Sum of all numbers in Array using recursion
```js
function sum(n) {
    if (n == 0) return arr[0];
    return arr[n]+sum(n-1)

}
let arr = [5,3,2,0,1]
console.log(sum(arr.length-1))
```

5. Sum of all odd numbers in Array
```js
function sum(n) {
    let isodd = ((arr[n] % 2) != 0);
    if (n == 0) {
    return isodd?arr[n]:0
  }
    return (isodd ? arr[n] : 0 )+  sum(n-1)
}
let arr = [5,3,2,0,1]
console.log(sum(arr.length-1))
```
6. Factorial of n using recursion

```js
function factorial(n) {
  if (n< 1) return 1;
  return n * factorial(n-1)
}

console.log(factorial(5))

```
7. Power of Two using recursion [🔗](https://leetcode.com/problems/power-of-two/submissions/1744121929/) 

```js
var isPowerOfTwo = function(n) {
if(n==1) return true;
else if((n%2 !=0) || n<1) return false;
  return isPowerOfTwo(n/2)
};

``` 
8. Fibonacci Number using recursion [🔗](https://leetcode.com/problems/fibonacci-number/description/)

```js
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2)
};


```

# Searching and Sorting - Easy & medium

1. Linear Search

```js
function  fun(arr, target) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == target) {
      return i
    }
  }
  return -1
}

let num = [2, 1, 2, 4, 0]
console.log(fun(num,0))

// Time complexity:O(2^n)
```
2. Binary Search [🔗](https://leetcode.com/problems/binary-search/description/)
```js
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(right>=left){
        let middle = Math.floor((left + right)/2)
        if(target == nums[middle]){
            return middle
        }
        else if(target < nums[middle]){
            right = middle -1 

        }
        else{
            left = middle +1
        }
    }
    return -1
};// Time complexity: O(logn)
// space complexity:O(1)
```