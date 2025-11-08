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
const arr = [
  {age: 5 } ,
  {age: 5 } ,
  {age: 5 } ,
  {age: 5 } ,
]

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


const output = arr.reduce(function (acc,cur){
      if(acc[cur.age]){
        acc[cur.age]++
      }
      else{
        acc[cur.age] =1 
      }

      return acc;

},{})

console.log(output);
