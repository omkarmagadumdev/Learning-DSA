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

function Outer(){
    var a = 0, b= 10;
    return function inner(){
        console.log(a)
    }
}

var z = Outer();
z();





