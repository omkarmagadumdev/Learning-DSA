"use strict";
// function reverse(){


//     let prev = null;
//     let cur = Headers;
//     while(cur){
//         let temp = cur.next;
//         cur.next = prev;
//         prev = cur
//         cur = temp
//     }
//     return prev
    
// }

// let a = 10;

// const a;
// a = 20

// console.log(a);



// closures
// function outer(){
//     let a = 10;
//     return function inner(){
//         ++a;
//         console.log(a)
//     }
    
// }

// outer()()


// function outer(){
//     var a = 0;
//    return  function x(){
//         ++a
//         console.log(a)
//     }
// }

// var x = outer();
// x();
// x();
// x();
// x();

// var y = outer();
// y();

// scalable for the increment and decrement in clousers ft constructer function 


// function Outer(){
//     var a = 0;
//     this.increment =  function (){
//         ++a
//         console.log(a)
//     }
//     this.decrement =  function (){
//         --a
//         console.log(a)
//     }
  
// }

// var x = new Outer();

// x.increment();
// x.increment();
// x.decrement();



//smartly garbage collected 

// function Outer(){
//     var a = 0, b= 10;
//     return function inner(){
//         console.log(a)
//     }
// }

// var z = Outer();
// z();

// function statement aka function declaration

// a();

// function a(){
//     console.log("FS ");
    
// }



// // function expression
// var b = function(){
//     console.log("FE");
    
// }
// b();






// Anonymous function 


// Named function expression
// difference b/w parameters and argument
// first class function 
// arrow function 

// function y(cb){
//   cb()
// }

// function x(){
//   console.log(" i am callback");
// }
// hello(hi);


// function hello(call){

//     console.log("hello");
//     call();

  

// }

// function  goodbye(){
//   console.log("goodbye")
// }

// function leave(){
//   console.log("leave")
// }


// function hi(){
//   console.log("hi")
// }


// sum(mul,4,3)

// function sum(callback,x,y){
    
//     callback()
// }

// function displayconsole(result){
//   console.log(result)
// }

// function mul(){
//     let result = x * y
//     console.log(result)
// }


// const arr  = [5,2,3,4,5];


// function double(x){
//   return  x*2
// }

// function triple(x){
//     return x*3
// }


// console.log(arr.map(triple))
// const arr = [
//   {age: 5 } ,
//   {age: 5 } ,
//   {age: 5 } ,
//   {age: 5 } ,
// ]

// function iseven(x){
//   return  x% 2 == 0
// }
// console.log(arr.filter(iseven))


// const output = arr.reduce(function (acc,curr){
//   if(curr > acc){
//     acc = curr
//   }
//   return acc
// },0)

// console.log(output)


// const output = arr.reduce(function (acc,cur){
//       if(acc[cur.age]){
//         acc[cur.age]++
//       }
//       else{
//         acc[cur.age] =1 
//       }

//       return acc;

// },{})

// console.log(output);



// accountcity = "bangaluru";
// console.log(accountcity);

// var x = 5;
// var x =10;

// let y = 5;
// let y = 10;


// +++++++++++++++++++++++++++++++ Filter map and reduce +++++++++++++++++++++++++++++++++++
let arr = [2,3,4,6,76,8,9,5];

// console.log(arr.filter((nums) => {
//  return  nums > 4
// }))

// let q = []
// arr.forEach((nums)=> {
//   if(nums > 4){
//     q.push(nums)
//   }
// })

// console.log(q);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2008 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks = 

// console.log(userbooks);

// const userbooks = books.filter((nums)=>{ 
//   return nums.publish === 2007 && nums.genre === "History"
// });


// console.log(userbooks)

// let reducing = arr.reduce((acc,cur)=>{
//   return acc = acc + cur
// },0);

// console.log(reducing);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]


// const store = shoppingCart.reduce((acc,cur) =>{
//   return acc  = acc + cur.price
// },0)

// console.log(store);

function fun(username = "sam"){
  if(!username){
    // console.log("please enter");
    
  }

  return `${username} is just logged in`;



}

// console.log(fun("omkar"));

function calculateCart(val1,val2,...nums1){
  console.log(`this is v1:${val1}`)
  console.log(`this is v2:${val2}`)
  // console.log("this is v2:"`${val2}`)
  // // console.log(val2);


  return nums1
}

console.log(calculateCart(24,2,1,6));


