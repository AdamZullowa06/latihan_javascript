function jumlahVolumeDuaKubus(a,b) {
    var volA;
    var volB;
    var total;
    
    volA = a * a * a;
    volB = b * b * b;

    total = volA + volB;

    return total;
}

console.log(jumlahVolumeDuaKubus(8,3));
console.log(jumlahVolumeDuaKubus(10,15));