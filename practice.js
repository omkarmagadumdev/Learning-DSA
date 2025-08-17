var reverseString = function(s) {
 let len = s.length;
    let halflen = len/2;
    for(let i =0;i<halflen;i++){
      let temp = s[i];
      s[i] = s[len-1-i];
      s[len-1-i] = temp ;
    }
    return s;
};

let s= ["h","e","l","l","o"];
let result = reverseString(s);
console.log(s)