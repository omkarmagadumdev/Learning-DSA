function sum(n) {
    let n =n.length
    for (let i = 0; i < n.length; i++){
        if (n == 0) return 0;
        return n + sum(n - 1);
    }
   
}
let total= [5,3,2,0,1]
let result  =  sum(total)
console.log(result)

