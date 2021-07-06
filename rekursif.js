function rekursif(n) {
    if(n === 0) return;
    console.log(n);
    rekursif(n-1);
}

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

rekursif(10);
console.log(faktorial(5));
