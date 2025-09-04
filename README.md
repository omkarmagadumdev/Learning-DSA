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
3. Bubble Sort
```js
function BubbleSort(arr) {
    let n = arr.length
 let isSwapped = false
    for (let i = 0; i < n ; i++){
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
                isSwapped = true;
            }
        }
            if (!isSwapped) break;
    }
    return arr
}

let arr = [2, 1, 5, 4];
console.log(BubbleSort(arr))
//Time complexity: O(n^2)
// space complexity: O(1)
```
4. Selection Sort  

```js
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Swap
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

let arr = [7, 1, 5, 4, 3, 2];
console.log(selectionSort(arr)); 

//Time conplxity: O(n^2);
// space complexity:O(1)
```
5. Insertion Sort
```js
function insertionsort(arr) {
    for (let i = 1; i < arr.length; i++){
        let cur = arr[i];
        let prev = i - 1;
        while (arr[prev] > cur && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev-- 
        }
        arr[prev + 1] = cur 
    }
    return arr
}

let arr = [3, 4, 5, 7, 1, 2];
console.log(insertionsort(arr))
```
6. Merge Sort [🔗](https://leetcode.com/problems/sort-an-array/description/)
```js
var sortArray = function(nums) {
    if(nums.length<=1) return nums;
    let middle = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,middle));
    let right = sortArray(nums.slice(middle));
    return merge(left,right)

};


function merge(left,right){
    let res = [];
    let p1 =0;
    let p2 =0;
    while(p1<left.length && p2<right.length){
        if(left[p1]<right[p2]){
            res.push (left[p1]);
            p1++

        }
        else{
            res.push(right[p2]);
            p2++
        }
    }
     return res.concat(left.slice(p1)).concat(right.slice(p2));
}
```

# Linked List 


## Introduction to Linked List [🔗](https://namastedev.com/learn/namaste-dsa/introduction-to-linked-list-dsa-notes)

1.  Design Linked List [🔗](https://leetcode.com/problems/design-linked-list/description/)

```js
function node(val){
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size =  0;
    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let newnode = new Node(val);
  newnode.next = this.head;
  this.head = newnode;
  this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
let newnode = new Node(val);
if(this.head ==null){
    this.head = newnode;

}
else{
    let cur = this.head;
    while(cur.next != null){
        cur = cur.next
    }
    cur.next = newnode
}
this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
         let newnode = new node(val);
    if(index == 0){
        this.addAtHead(val);
        return 
    }
    else if(index == this.size){
        this.addAtTail
        return
    }
    else{
    let cur = this.head;
    for(let i =0;i<index-1;i++){
        cur = cur.next;

    }
    newnode.next =cur.next;
    cur.next = newnode

    }
   this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};
```
2. Middle of Linked List [🔗](https://leetcode.com/problems/middle-of-the-linked-list/)

Aproch 1:cnvert into array
`spacecomplexity:O(n)`

Approch 2: slow and fast pointer approch
```js
var middleNode = function(head) {
    let slow = head;
    let fast = head
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
};
// time complexity:O(n);
// space complexity:O(1)
```

3. Reverse Linked List [🔗](https://leetcode.com/problems/reverse-linked-list/description/)
```js
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur){
        let temp = cur.next
       cur.next =prev;
       prev = cur
        cur = temp
    }
    head = prev
    return head
};
```
4. Linked List Cycle - Hash Table(Approch 1 ) [🔗](https://leetcode.com/problems/linked-list-cycle/description/).
```js
var hasCycle = function(head) {
    let seenode = new Set();
    let cur = head;
    while(cur){
        seenode.add(cur);
        cur = cur.next
        if(seenode.has(cur)) return true;

    }
    return false

};
// TC:O(n)
// SC:O(n)
```
Linked List Cycle - Floyd's Algorithm 

```js
var hasCycle = function(head) {
    if(head == null) return false
    let slow = head;
    let fast = head.next;
    while(slow != fast){
        
        if(fast == null || fast.next== null){
            return false
        }
        slow = slow.next;
        fast = fast.next.next
    }
    return true
};
// TC:O(n);
// SC:O(1)
```

5. Palindrome Linked List [🔗](https://leetcode.com/problems/palindrome-linked-list/description/)
```js
var isPalindrome = function(head) {
    
    // find the middl element
    let slow = head;
    let fast = head;
    while(fast && fast.next){

        slow = slow.next;
        fast = fast.next.next;

    }
    
  // revrse the secondhalf
    let prev = null;
    let cur = slow;
    while(cur){
        let temp = cur.next;
        cur.next= prev;
        prev = cur;
        cur = temp
    }
  

  let firstlist = head;
  let secondlist = prev;
  while(secondlist ){
    if(firstlist.val != secondlist.val){
        return false
    }
    firstlist= firstlist.next;
    secondlist = secondlist.next
  }
return true
};
//TC:O(n)
//SC:O(1)
```

6. Intersection of two Linked Lists[🔗](https://leetcode.com/problems/intersection-of-two-linked-lists/)

`Note:`Searching an element in LL takes O(n),hash map its takes O(1).

```js
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    while(headA){
        set.add(headA);
        headA = headA.next
    }

    while(headB){
        if(set.has(headB)){
            return headB
        }
        else{
            headB = headB.next
        }
    }
    return null
};
// TC:O(1)
// SC:O(n)
```
7. Remove Linked List Elements [🔗](https://leetcode.com/problems/remove-linked-list-elements/)

```js
var removeElements = function(head, val) {
    let sentinal = new ListNode();
     sentinal.next = head;


     let prev = sentinal
     while(prev && prev.next){
            if(prev.next.val == val){
                prev.next = prev.next.next;

            }
            else{

           prev = prev.next
            }
     }
     return sentinal.next
};
```


8. Remove nth node from end of List - Two Pass [🔗](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

```js
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    // length of the LL
    let length = 0;
    while(head){
        head = head.next;
        length++
    }
    // prev pos

    let prevpos = length -n;

    // Delete postion
    let prev = sentinel;
for(let i =0;i<prevpos;i++){
prev = prev.next

}
prev.next = prev.next.next


    return sentinel.next
};
// TC:O(n)
// SC:O(1)
```
One pass 
```js
var removeNthFromEnd = function(head, n) {
    // add the sentinel node
        let sentinel = new  ListNode();
        sentinel.next = head;



    // move the first pointer ahead by n
   let first = sentinel;
   for(let i = 0;i<n;i++){
    first = first.next
   }

    // move both pointers until the first pointer reches the last node
    let second = sentinel
        while(first.next){
            second = second.next
            first = first.next;
        }

    // delete the second.next
   second.next = second.next.next
        return sentinel.next
};
// TC:O(n)
// SC:O(1)
```
9.Remove Duplicates from Sorted List [🔗](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

```js
var deleteDuplicates = function(head) {
    let cur = head
   
    while(cur && cur.next){
  if(cur.val == cur.next.val){
         cur.next = cur.next.next
         
  }
  else{
    cur= cur.next
  }
    }
    return head
};
// TC:O(n)
// SC:O(1)
```
6. [🔗]()