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
//TC:O(n)
//SC::O(n)


```
2. print 1 to n using recursion
```js 
   let  n = 10;
function print(x) {
    if (x > n) return;
    console.log(x);
    print(++x);
}
//TC:O(n)
//SC:O(n)
print(1)
```
3. sum of first  n numbers using recursion
```js
function sum(n){
    if(n<1) return 0;
    return n+sum(n-1);
}
console.log(sum(n));
//TC:O(n)
//SC:O(n)

```
4. Sum of all numbers in Array using recursion
```js
function sum(n) {
    if (n == 0) return arr[0];
    return arr[n]+sum(n-1)

}
let arr = [5,3,2,0,1]
console.log(sum(arr.length-1))
//TC:O(n)
//SC:O(n)
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
//TC:O(n)
//SC:O(n)
```
6. Factorial of n using recursion

```js
function factorial(n) {
  if (n< 1) return 1;
  return n * factorial(n-1)
}

console.log(factorial(5))

//TC:O(n)
//SC:O(n)
```
7. Power of Two using recursion [🔗](https://leetcode.com/problems/power-of-two/submissions/1744121929/) 

```js
var isPowerOfTwo = function(n) {
if(n==1) return true;
else if((n%2 !=0) || n<1) return false;
  return isPowerOfTwo(n/2)
};
//TC:O(logn)
//SC:O(logn)

``` 
8. Fibonacci Number using recursion [🔗](https://leetcode.com/problems/fibonacci-number/description/)

```js
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2)
};
//TC:O(2^n)
//SC:O(n)

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
//SC:O(nlogn)
//TC:O(n)
```

# Linked List 


## Introduction to Linked List [🔗](https://namastedev.com/learn/namaste-dsa/introduction-to-linked-list-dsa-notes)

1.  Design Linked List [🔗](https://leetcode.com/problems/design-linked-list/description/)

```js
function Node(val){
    this.val = val;
    this.next = null

}
var MyLinkedList = function() {
        this.head =null;
        this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0 || index>=this.size) return -1;
    let cur = this.head;
    for(let i =0;i<index;i++){
        cur = cur.next
    }
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next  = this.head;
    this.head = newNode
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head == null){
        this.head = newNode
    }
    else{
          let cur = this.head;
    while(cur.next){
        cur = cur.next

    }
    cur.next = newNode;
    }
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);

    if(index < 0 || index > this.size) return;

    if(index == 0){
      this.addAtHead(val);
      return 
    }
    else if(index == this.size){
        this.addAtTail(val);
        return
    }
    else{
            let cur = this.head
    for(let i =0;i<index-1;i++){
        cur = cur.next
    }
        newNode.next = cur.next;
        cur.next = newNode;
    }
        this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this.size) return;
    if(index == 0) {
        this.head = this.head.next
        this.size--;
        return;

    }
    let cur = this.head;
    for(let i =0;i<index-1;i++){
         cur = cur.next
    }
    cur.next = cur.next.next
    this.size--
};

// Operation	Time Complexity	Space Complexity
// get(index)	O(n)	O(1)
// addAtHead(val)	O(1)	O(1)
// addAtTail(val)	O(n)	O(1)
// addAtIndex	O(n)	O(1)
// deleteAtIndex	O(n)	O(1)
// Whole List	—	O(n)
```
2. Middle of Linked List [🔗](https://leetcode.com/problems/middle-of-the-linked-list/)

Aproch 1:convert into array
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
9. Remove Duplicates from Sorted List [🔗](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

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
10. Odd Even Linked List[🔗](https://leetcode.com/problems/odd-even-linked-list/description/)

```js
var oddEvenList = function(head) {
    if(!head || !head.next) return head
 let odd = head;
 let even = head.next;
 let evenstart = even;
 while(odd.next && even.next){
  

    odd.next = odd.next.next;
    even.next = even.next.next
    odd = odd.next;
    even = even.next
 }
 odd.next = evenstart
 return head
};
// TC:O(n)
// Sc:O(1)
```
11. Add Two Numbers [🔗](https://leetcode.com/problems/add-two-numbers/description/)
```js
var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode();   // dummy node
    let anhead = ans;           // store head
    let carry = 0;

    while(l1 || l2 || carry){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        ans.next = new ListNode(digit);
        ans = ans.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return anhead.next;
};
// SC:O(n)
// TC:O(n)
```
```
```
12. Merge Two Sorted Lists[🔗](https://leetcode.com/problems/merge-two-sorted-lists/)


// without dummy node
```js
var mergeTwoLists = function(l1, l2) {
    if(l1 ==null){
        return l2
    }
    else if(l2== null){
        return l1
    }
let cur = null;
    if(l1.val < l2.val){
        cur = l1;
        l1 = l1.next
    }
    else{
            
        cur = l2;
        l2 = l2.next
    }
  
    
    let curcopy = cur

    while(l1 &&  l2){
        if(l1.val <l2.val){
            cur.next = l1;
            l1 = l1.next;
        }
        else{
            cur.next = l2;
            l2 = l2.next
        }
        cur = cur.next
    }
    if(!l1){
        cur.next = l2
    }
    if(!l2){
        cur.next = l1
    }
    
    
    return curcopy
};
```
```js  with dummynode 
var mergeTwoLists = function(l1, l2) {
   

    let dummy = new ListNode();
    let cur = dummy;

    while(l1 &&  l2){
        if(l1.val <l2.val){
            cur.next = l1;
            l1 = l1.next;
        }
        else{
            cur.next = l2;
            l2 = l2.next
        }
        cur = cur.next
    }
    if(!l1){
        cur.next = l2
    }
    if(!l2){
        cur.next = l1
    }
    
    
    return dummy.next
};
```

13. Rotate List[🔗](https://leetcode.com/problems/rotate-list/)
```js
var rotateRight = function(head, k) {
    if(!head || !head.next) return head

    let length = 0;
    let find = head
    while(find){
        length++
        find = find.next
    }
    k = k % length

    let f = head;
    let s = head;
    for(let i =0;i<k;i++){
        f = f.next
    }

    while(f.next){
        s = s.next
        f = f.next
    }
    f.next = head;
    let newhead = s.next
    s.next = null;
  return newhead

};
```
14. Swap Nodes in Pairs - Iterative Approach [🔗](https://leetcode.com/problems/swap-nodes-in-pairs/description/)
```js
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let sentinel = new ListNode();
    sentinel.next = head;


    let p = sentinel;
    let c = head;
    let n = head.next

    while(c && n){
        p.next = n;
        c.next = n.next;
        n.next = c
        p = c;
        c = p.next;
        n =  c && c.next
    }

 return sentinel.next

};
// TC:O(n)
// SC:o(1)
```
Swap Nodes in Pair - Recursive Approach
```js
var swapPairs = function(head) {
    if(!head || !head.next) return head
    let l = head
    let r = head.next
    l.next = swapPairs(r.next);
    r.next = l;
    return r 
};
```

# String Easy/Medium 

1. Length of Last Word - Approach 1 - Two Loops[🔗](https://leetcode.com/problems/length-of-last-word/)
```js
var lengthOfLastWord = function(s) {
    s= s.trim();
    s= s.split(" ");
    return s[s.length-1].length
};
// TC:trim()loop = O(n) split (" ")O(n)
// SC:O(n)
```
```js
var lengthOfLastWord = function(s) {
    let n = s.length-1;
    while(n>=0){
            if(s[n] == " "){
                --n
            }
            else{
                break;

            }
    }
            let count =0
            while(n>=0){
                    if(s[n] != " "){
                        --n;
                        ++count; 
                    }
                    else{
                        break
                    }
            }

    
    return count
};
// TC:O(n)
// SC:O(1)
```

```js
var lengthOfLastWord = function(s) {
  let n = s.length - 1;
  let count = 0;
  while(n>=0){
        if(s[n] != " "){
            count++
            n--
        }
        else if(count>0){
            break;

        }
        else{
            n--
        }
  }
  return count
};
```
2. Find Words Containing Character[🔗](https://leetcode.com/problems/find-words-containing-character/)

```js
var findWordsContaining = function(words, x) {
    let res = []
    for(let i =0;i<words.length;i++){
        if(words[i].includes(x)){
             res.push(i)

        }
    }
    return res
};
// TC:O(n)
// SC:O(n)
```
```js
var findWordsContaining = function(words, x) {
    let res = []
   for(let i =0;i<words.length;i++){
    for(let j =0 ;j<words[i].length;j++){
        if(words[i][j] == x){
                res.push(i);
                break
        }
    }
   }
   return res
};
// TC:O(n^2) or O(m*n) and its o(n) m is breaking early;
// SC:O(1) because we are not using array in between and we are using it just store the value  
```
3. Jewels and Stones [🔗](https://leetcode.com/problems/jewels-and-stones/)
```js
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i =0;i<stones.length;i++){
        for(let j =0;j<jewels.length;j++){
            if(jewels[j] == stones[i]){
                count++
            }
        }
    }
    return count
};

```

```js optimized
var numJewelsInStones = function(jewels, stones) {
    let set = new Set();
    for(let i =0;i<jewels.length;i++){
        set.add(jewels[i])
    }

    let count = 0;
    for(let j =0;j<stones.length;j++){
        if(set.has(stones[j])){
            count++
        }
    }
    return count
};
// TC:O(1) * O(n) = O(n) set 
// SC:O(1) set is max 52 
```

4. Find Most Frequent Vowel and Consonant[🔗](https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/)

```js
var maxFreqSum = function(s) {
    let map = {};
    for (let i = 0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1
        }
        else{
            map[s[i]]++
        }
    }
    let vowels = ['a','e','i','o','u']
    let maxvowels = 0;;
    let maxconsonants =0

    for(let i =0;i<s.length;i++){
        if(vowels.includes(s[i])){
            if(map[s[i]]>maxvowels){
                maxvowels = map[s[i]]
            }
        }
        else{
            if(map[s[i]]>maxconsonants){
                maxconsonants = map[s[i]]
            }
        }
    }
    return maxvowels + maxconsonants
};
```
```js
var maxFreqSum = function(s) {
    let map = {};

   for(let i =0;i<s.length;i++){
    map[s[i]] = !map[s[i]] ? 1: ++map[s[i]]
   
   }
    let mapkeys = Object.keys(map)
    let vowels = ['a','e','i','o','u']
    let maxvowels = 0;
    let maxconsonents =0
   for(let i= 0;i<mapkeys.length;i++){
    if(vowels.includes(mapkeys[i])){
    maxvowels = Math.max(map[mapkeys[i]],maxvowels)
       
       
    }
    else{
       maxconsonents = Math.max(map[mapkeys[i]],maxconsonents)
    }
   }
   return maxvowels +maxconsonents
};
// TC:O(1):O(n) = O(n)
// SC:O(1)
```
5. Split a String in Balanced Strings[🔗](https://leetcode.com/problems/split-a-string-in-balanced-strings/)
```js
var balancedStringSplit = function(s) {
    let r = 0;
    let l =0;
    let count = 0
    for(let i =0;i<s.length;i++){
            if(s[i] == 'R' ){
                r++
            }
            else{
                l++
            }
            if(r == l){
                count++
                r = 0;
                l = 0
            }
    }
    return count
};
// TC:O(n)
// SC:O(1)
```
```js
var balancedStringSplit = function(s) {
    let temp = 0
    let count = 0
    for(let i =0;i<s.length;i++){
       
            if(s[i] == 'R' ){
                ++temp
            }
            else{
                --temp
            }
            if(temp == 0){
                count++
               
            }
    }
    return count
};
```
6. Reverse String II [🔗](https://leetcode.com/problems/reverse-string-ii/)

```js
var reverseStr = function(s, k) {
     s= s.split("")
    for(let x =0;x<s.length; x = x+(2*k)){

    let n = k
    let mid = Math.floor(n/2);

for(let i =0;i<mid;i++){
    let temp = s[x+i];
    s[x+i] = s[x+n-1-i];
    s[x+n-1-i] = temp
}
            


    }

    return s.join("")
};

```
7.  Valid Palindrome - Approach 1 - Extra Space[🔗](https://leetcode.com/problems/valid-palindrome/description/)

```js
var isPalindrome = function(s) {

    s = s.toLowerCase();
    let filterstring = "";
    let rev = "
    for(let i =0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filterstring += s[i];
            rev = s[i] + rev 
        }
    }
   
//    let rev = filterstring.split("").reverse().join("")

    return filterstring == rev

};
// TC:O(n)
// SC:O(n)
```

```js
var isPalindrome = function(s) {

s = s.toLowerCase()
    let p1 = 0;
    let p2 = s.length-1;
     let middle = Math.floor(s.length/2)
    while(p1<p2){
        if(!s[p1].match(/[a-z0-9]/i)) {
            p1++
        }
        else if(!s[p2].match(/[a-z0-9]/i)) {
            p2--
        }
       else if(s[p1] == s[p2]){

       p1++;
       p2--
       }
       else{
        return false
       }
    }
    return true
};
```
8. Largest Odd Number in a String [🔗](https://leetcode.com/problems/largest-odd-number-in-string/)
```js
var largestOddNumber = function (num) {

    let n = num.length - 1;

    while (n >= 0) {
        if (Number(num[n]) % 2 == 1) {
            return num.substring(0, n + 1)

        }
        n--


    }

    return ""

};
// TC:O(n)
// SC:O(1)
```

9. Longest Common Prefix[🔗](https://leetcode.com/problems/longest-common-prefix/description/)

```js
var longestCommonPrefix = function(strs) {
    let x =0;
    while(x<strs[0].length){
        let ch = strs[0][x];
        for(let i =1;i<strs.length;i++){
            if(ch != strs[i][x] || x== strs[i].lenght){
                return strs[0].substring(0,x)
            }
        }
        x++
    }
  return strs[0]
};
// TC:O(s)
// SC:O(1)

```
10. Valid Anagram[🔗](https://leetcode.com/problems/valid-anagram/)
```js
var isAnagram = function(s, t) {
    return  (s.split("").sort().join("")) == (t.split("").sort().join("")) 
};
```

```js
var isAnagram = function(s, t) {
      if (s.length !== t.length) return false;
  
      let map = {};
  
      for (let i = 0; i < s.length; i++) {
          if (!map[s[i]]) {
              map[s[i]] = 1;
          } else {
              ++map[s[i]];
          }
      }
  
      for (let i = 0; i < t.length; i++) {
          if (!map[t[i]] || map[t[i]] === 0) {
              return false;
          } else {
              --map[t[i]];
          }
      }
  
      return true;
  };
//   TC:O(n)
//   SC:O(1)

  ```
11. Isomorphic Strings[🔗](https://leetcode.com/problems/isomorphic-strings/)

```js

  var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false
    let mapStoT = {};
    let mapTtoS = {};


    for(let i =0;i<s.length;i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        }
        else if(mapTtoS[t[i]] != s[i]){
            return false
        }
        else if(mapStoT[s[i]] != t[i]){
            return false
        }
       
    }
    return true

};
// TC:O(n)
// SC:O(1)
```
12. Group Anagrams - Approach 1 - Sorted Key[🔗](https://leetcode.com/problems/group-anagrams/description/)
```js
var groupAnagrams = function(strs) {    
    let map = {};
    for(let i =0;i<strs.length;i++){
        let sortted = strs[i].split("").sort().join("");
        if(!map[sortted]){
            map[sortted] = [strs[i]]
        }
        else{
            map[sortted].push(strs[i])
        }
    }
    return [...Object.values(map)]
};
// TC:O(nx mlogm)
// SC:O(n x m)
```
```js

var groupAnagrams = function(strs) {
    let map ={};
    for(let i =0;i<strs.length;i++){
        let freqarr = Array(26).fill(0)
            let s = strs[i];
        for(let j =0;j<s.length;j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            freqarr[index]++
        }
        let key = ""
        for(k = 0;k<26;k++){
                key = key + String.fromCharCode(k) + freqarr[k]
        }
        if(!map[key]){
            map[key] = [s]; 
        }
        else{
            map[key].push(s)
        }
    }
    return [...Object.values(map)]
};
// TC:O(n x m)
// SC:O(n x m)
```




 # Stack & Queues

1. Implement Stack using Two Queues[🔗](https://leetcode.com/problems/implement-stack-using-queues/)
```js
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i =0;i<n-1;i++){
        // let forntEle = this.q1.shift();
        // this.q2.push(frontEle);
        this.q2.push(this.q1.shift());

    }
    let ans = this.q1.shift();


    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  let n = this.q1.length;
  for(let i =0;i<n-1;i++){
    this.q2.push(this.q1.shift())
  }  

  let front = this.q1[0];
  this.q2.push(this.q1.shift(front))

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return front
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
return this.q1.length == 0
};
```
```js
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i =0;i<n-1;i++){
        // let forntEle = this.q1.shift();
        // this.q2.push(frontEle);
        this.q1.push(this.q1.shift());

    }
    let ans = this.q1.shift();


 
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  let n = this.q1.length;
  for(let i =0;i<n-1;i++){
    this.q1.push(this.q1.shift())
  }  

  let front = this.q1[0];
  this.q1.push(this.q1.shift(front))


  return front
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
return this.q1.length == 0
};
```

2. Implement Queue using Stacks[🔗](https://leetcode.com/problems/implement-queue-using-stacks/description/)
```js

var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
   if(this.s2.length == 0){
        while(this.s1.length >0){
            this.s2.push(this.s1.pop())//O(n)
        }
   }
    
   return this.s2.pop()//O(1)
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
       if(this.s2.length == 0){
        while(this.s1.length >0){
            this.s2.push(this.s1.pop())
        }
   }
   

   return this.s2[this.s2.length-1]
};


/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length == 0 && this.s2.length == 0
};
// Big O -  worst O(n)
// avarege case O(1)
```

3. Valid Parentheses[🔗](https://leetcode.com/problems/valid-parentheses/)
```js
var isValid = function(s) {
    let stack = []
    for(let i =0;i<s.length;i++){
            if(s[i] == "["  || s[i]== "(" || s[i] == "{"){
                stack.push(s[i])
            }
            else{
                let top = stack.pop();
                if(!top || (top == "["  && s[i] != "]") || (top == "{"  && s[i] != "}") || (top == "("  && s[i] != ")")){
                    return false
                }
                   
            }
    }
    return stack.length == 0
    
};
```

```js
var isValid = function(s) {
    let stack = []
    let map = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    for(let i =0;i<s.length;i++){
            if(map[s[i]]){
                stack.push(s[i])
            }
            else{
                let top = stack.pop();
                if(!top ||  s[i] != map[top]){
                    return false
                }
                   
            }
    }
    return stack.length == 0
    
};
```
4. Min Stack[🔗](https://leetcode.com/problems/min-stack/)
```js

var MinStack = function () {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

    if (this.stack.length == 0) {
        this.stack.push([val, val])
    }
    else {
        let minval = Math.min(val,this.stack[this.stack.length-1][1])
        this.stack.push([val,minval])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length-1][1]
};
```
5. Remove Outermost Parentheses - Using Stack[🔗](https://leetcode.com/problems/remove-outermost-parentheses/description/)
```js
var removeOuterParentheses = function(s) {
    let stack = []
        let ans = ""
    for(let i =0;i<s.length;i++){
        if(s[i] == "("){
            stack.push(s[i])
            if(stack.length >1){
            ans = ans + s[i]
        }
     
        }
        else{
            
        if(stack.length >1){
            ans = ans + s[i]
        }
            
            stack.pop()
        }
        
    }
    return ans
};
```
```js
var removeOuterParentheses = function(s) {
    let level = -1;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++level;
            ans += (level ? s[i] : "");
        } else {
            ans += (level ? s[i] : "");
            --level;
        }
    }
    return ans;
};
```
6. Evaluate Reverse Polish Notation[🔗](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

```js
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/") {
            let a = stack.pop()
            let b = stack.pop()

            let sum = eval(`${b}  ${tokens[i]}  ${a}`)

            stack.push(Math.trunc(sum))
            if(tokens[i] == '/'){
                sum = Math.trunc(sum)
            }

        }
        else {

            stack.push(tokens[i])

        }



    }

    return Number(stack.pop());
    
};
```


7. Next Greater Element[🔗](https://leetcode.com/problems/next-greater-element-i/)

```js
var nextGreaterElement = function (nums1, arr) {
    let ngemap = {}
    let stack = [];
    let n = arr.length

    stack.push(arr[n-1])
    ngemap[arr[n-1]] = -1

    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1]
        if (arr[i] < top) {
            ngemap[arr[i]] = top
        }
        else {
            while(stack.length){
                if(stack[stack.length-1] < arr[i]){
                    stack.pop()
                }
                else{
                    ngemap[arr[i]] = stack[stack.length-1];
                    break;
                }
            }

            if(!stack.length){
                ngemap[arr[i]] = -1
            }

        }
                stack.push(arr[i])
    }

    let ans = []
    for(let i =0;i<nums1.length;i++){
        ans.push(ngemap[nums1[i]])
    }
    return ans
};

```

8. Daily Temperatures[🔗](https://leetcode.com/problems/daily-temperatures/description/)
```js
var dailyTemperatures = function(arr) {
    
    let stack = [];


    let n = arr.length;
    let ans = Array(n).fill(0);


    stack.push(n-1);

    for(let i = n-2;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1]
          
            if(arr[i] >= arr[top]){
                stack.pop()
            }
            else{
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i)
    }
    return ans

};
```

9. Next Greater Element - II [🔗](https://leetcode.com/problems/next-greater-element-ii/)
```js
var nextGreaterElements = function(nums) {
    let arr = [...nums, ...nums];

    let n = arr.length;

    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i = n-2;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1]
            if(arr[i]  <  top){
                
                ans[i] = top;
                break;
            }
            else{
                stack.pop()
            }
        }
      
        stack.push(arr[i])
    }
    return ans.slice(0,n/2)
};
```

10. [🔗]()
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    let m = grid.length;
    let n = grid[0].length


    // first add all the rotten oranges in the queue
    let queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j, 0])
            }
        }
    }



    // mark adj nodes as a rotten and push into the queue
    let maxmin = 0;

    while (queue.length) {
        let [x, y,level] = queue.shift()
        if (x > 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1])
        }
        if (x < m - 1 && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1])
        }
        if (y < n - 1 && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y+1, level + 1])
        }
        if (y > 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1])
        }
        maxmin = Math.max(level, maxmin)

    }



    // finally run over each element and check if any fresh is remaining

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                return -1
            }
        }
    }


    return maxmin
};

// TC:O(m x n)
// SC:O(m x n)
```


# Binary Search;



1. Square Root of X[🔗](https://leetcode.com/problems/sqrtx/)
```js
var mySqrt = function(x) {
      if (x < 2) return x;
      let l = 2;
      let r = Math.floor(x / 2);
      while (l <= r) {
          let m = Math.floor((l + r) / 2);
          if (x === m * m) {
              return m;
          } else if (x < m * m) {
              r = m - 1;
          } else {
              l = m + 1;
          }
      }
      return r;
  };
      
```

2. Guess Higher or Lower[🔗]()
```js
var guessNumber = function(n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        let res = guess(m);
        if (res === 0) {
            return m;
        } else if (res < 0) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
}; 
```

13. [🔗]()
```js

```