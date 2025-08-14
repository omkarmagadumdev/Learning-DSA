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

<details>
<summary>Day 1</summary>

- **Day 1:** Solved Two Sum (DSA), Express server setup (MERN)  
- **Day 2:** Binary Search Binary Tree implementation, MongoDB connection (MERN)  
- **Day 3:** Learned OS process scheduling, React hooks (MERN)  
- … aur aise aage continue karo.

</details>

