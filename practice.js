function reverse(){

    let prev = null;
    let cur = Headers;
    while(cur){
        let temp = cur.next;
        cur.next = prev;
        prev = cur
        cur = temp
    }
    return prev
    
}