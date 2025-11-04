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


function outer(){
    var a = 0;
   return  function x(){
        ++a
        console.log(a)
    }
}
var y = outer();
console.log(y);

y();
y();
y();
y();








