function rekursif(n) {
    if(n === 0) return;
    console.log(n);
    rekursif(n-1);
}

rekursif(10);