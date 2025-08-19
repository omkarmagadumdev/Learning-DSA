function print(x) {
    n = 10;
    if (x > n) return;
    console.log(x);
    print(++x);
}

print(1)