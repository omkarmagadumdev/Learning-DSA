var reverseString = function(s){
    for(let i=0;i<s.lenth/2;i++){
        let temp = s[i] ;
        s[i]= s[s.length-1-i];
        s[s.length-1-i] = temp
        
    }
}

let s = ["H","a","n","n","a","h"];
let result = swap(s);
console.log(result)