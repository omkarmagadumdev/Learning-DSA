// function evenorodd(num){
//     if(num%2){
//         console.log("not even");
//     }
//     else{
//         console.log(" even")
//     }
// }

// evenorodd(10);
// evenorodd(9);
// evenorodd(199);


// function oddoreven(num){
//     let rem = num%2;
//     if(rem ==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd");
//     }

// }


// oddoreven(5)



// function oddoreven(num){
//     if(num%2){
//         console.log("odd")
//     }
//     else{
//         console.log("even")
//     }
// }
// oddoreven(4)


// function oddoreven(num){
//     let rem = num%2;
//     if(rem == 0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// oddoreven(13)



// function oddoreven(num){
//     if(num %2 ){
//         console.log("odd")
//     }
//     else{
//         console.log("even")
//     }
// }

// oddoreven(13)

// for (let i = 5; i > 0; i++){
//     console.log("hw")
// }

// let arr = [10, 9, 5, 3, 0, 3]
// let length = arr.length
// for (let i = 0; i<length; i++){
//     console.log(arr[i])
// }



// let arr  = [22,3,4,5,6,7,]

// for(let i =0;i<arr.length;i++){
//     if(arr[i]%2 ==0){
//        console.log(arr[i])
//     }
// }

// let arr = [-1,2,-3,-4,-5,-6]

// function negativecount(){
//     let count =0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<0){
//             count++
//         }
//     }
//     return count
// }


// let result = negativecount(arr)
// console.log(result)


// let arr = [1,2,4,66,82,3];

// function findthelargest(arr){
//     let largest = -Infinity
//     for(let i= 0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// let result = findthelargest(arr);
// console.log(result)


// let arr= [1,2,3,4,5,6]

// function findsamllest(arr){
    
//     if(arr.length <2){
//         return null;
//     }
//     let smallest = Infinity;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest
// }

// let result = findsamllest(arr);
// console.log(result)

// loops2 

// let arr = [1]

// function findsecondlargest(arr){
//     if(arr.length <2){
//         return null
//     }
//     largest = -Infinity;
//     secondlargest = -Infinity;
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest ){
//                 secondlargest = largest;
//                 largest = arr[i];

//         }
//         else if (arr[i]>secondlargest && arr[i] != largest){
//             secondlargest = arr[i];

//         }

//     }
//     return secondlargest
// }

// let result = findsecondlargest(arr);
// console.log(result)


// for(let i=0;i<3;i++){
//     // console.log(i)
//     // console.log("here")
//     for(let j=0;j<i;j++){
//         console.log("i=" +i  ,"j=" +j)
//     }
// }


// for(let i=0;i<3;i++){
//     for(let j=i;j>0;j--){
//         console.log(i,j)
//     }
// }




// for(j=0;j<i;j++){
//     console.log(j)
// }


// for(let i=5;i>0;i--){
//     for(let j=0;j<i;j++){
//         console.log(i,j)
//     }
// }


//star pattern


// let n=4;


//1

// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<4;j++){
//       row = row + "*"
//     }
//     console.log(row)
// }

//2

// for(let i=0;i<4;i++){
//     let row = "";
//     if(i==0){
//         row = row +"*"
//     }
//     else if(i==1){
//          row = row +"* *"
//     }
//     else if(i==2){
//          row = row +"* * *"
//     }
//     else if(i==3){
//          row = row +"* * * *"
//     }
//  console.log(row)
// }

// let n =4;
// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=0;j<=i;j++){
//         row += "*";
//     }
//     console.log(row)
// }
   
// let n=4;
// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<=i;j++){
//         row += "*";

//     }
//     console.log(row)
    
// }

//3
// let n=4;

// for(let i=0;i<n;i++){
//     let row = ""
// for(let j=0;j<=i +1;j++){
//     row += j
// }
// console.log(row)    
// }

// let n=4;
// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<=i;j++){
//     row +="*";
//     }
//     console.log(row);
// }


// let n=5;
// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=0;j<=i;j++){
//         row = row +(i+1)
//     }
//     console.log(row)
// }


// //4
// let n=5;
// for(let i=0;i<n;i++){
//     row = row +""
//     for(let j=0;j<n-i;j++){

//     } 
// }




// 5


// let n=5;
// for(let i=0;i<n;i++){
//     let row = ""
//     for(let j=0;j<n-i;j++){
//        row = row +"*" 
//     }
//      console.log(row)
// }

//6

// let n =5;

// for(let i=0;i<n;i++){
//     let row ="";
//     for(let j=0;j<n-(i+1);j++){
//         row += " "
//     }
//     for(let k=0;k<i+1;k++){
//         row +="*"
//     }
//     console.log(row)

// }

//7
// let n=4;
// for(let i=0;i<n;i++){
//     let row = "";
//     let toggle =1; 
    
//     for(let j=0;j<=i;j++){
//         for(toggle ==1){
//             row += toggle;

            
//         }
//     }
// }


// //8

// let n=5;
// for(let i=0;i<n;i++){
//     let row ="";
//     let toggle =1;
//     for(let j=0;j<=i;j++){
//         row = row + toggle;
//         if(toggle==1)  {
//             toggle =0
//         }
//         else{
//             toggle =1
//         }
//     }
//     console.log(row)
// }   '


// let n=4
// for(let i=0;i<n;i++){
//     let row = "";
//     let toggle =0;
//     if(toggle ==1){
//         toggle =0
//     }
//     for(let j=0;j<=i;j++){
//         row = row +toggle;
//    if(toggle ==1){
//     toggle =0;
//    }
// //    else if(toggle ==0){
// //     toggle =1;
// //    }
//    else{
//     toggle =1;
//    }
//     }
//     console.log(row)
// }

//9

// count digit
// function countdigit(n){
//     if (n==0) return 1;
//     n = Math.abs(n)
//     let count =0;

//     while(n>0){
//         n= Math.floor(n/10);
//         count++;
//     }
//     return count;
// }

// let num = -232;

// let result = countdigit(num);
// console.log(result);


// //10
// function pallindrome(n){
//     let rev =0;
//     while(n>0){
//        let rem = n%10;
//         rev = (10*rev)+ rem;
//         n = Math.floor(n/10);

//     }
//      if(rev == num){
//         return  true;
//     }
//     else{
//         return false
//     }

// }

// let num = 121;
// let result = pallindrome(num);
// console.log(result)



// var ispallindorome = function(x){
//     if(x<0) return false
//     let xcopy = x;
//     let rev = 0;
//     while(x>0){
//         let rem = n%10;
//         rev = (10*rev )+rem;
//         n = Math.floor(x/10);
//     }
//     return xcopy == x
// }
// let num = 1245
// let result = ispallindorome(num)
// console.log(result)



