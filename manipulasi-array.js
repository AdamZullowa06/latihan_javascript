// manipulasi array

// 1. Menambah isi array
var arr1 = [];
arr1[0] = ['Adam'];
arr1[1] = ['Ravi'];
arr1[2] = ['Bagus'];
arr1[3] = ['Mega'];
arr1[4] = ['Fella'];

console.log('1. Menambah isi array' , arr1);

// 2. Menghapus isi array
var arr2 = ['Adam', 'Ravi', 'Bagus'];
arr2[1] = undefined;
console.log('2. Menghapus isi array' , arr2);

// 3. Menampilkan isi array
var arr3 = ['Adam', 'Ravi', 'Bagus', 'Putri'];
console.log('3. Menampilkan isi array');
for(i = 0; i < arr3.length; i++) {
    console.log('Mahasiswa ke -' + (i+1) + ' : ' + arr3[i]);
}

// Method pada array
// 1. Join
var arr4 = ['Adam', 'Ravi', 'Bagus', 'Putri'];
console.log('4. Method Join \n', arr4.join(', '));

// 2. push & pop (elemen terakhir)
var arr5 = ['Adam', 'Ravi', 'Bagus', 'Putri'];
arr5.push('Mega');
// arr5.pop();
console.log('5. Method push & pop \n', arr5.join(', '));

// 3. unshift & shift (elemen pertama)
var arr6 = ['Adam', 'Ravi', 'Bagus', 'Putri'];
arr6.unshift('Mega');
// arr6.shift();
console.log('6. Method unshift & shift \n', arr6.join(', '));

// 4. splice (pertengahan elemen)
// format : splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
var arr7 = ['Adam', 'Ravi', 'Bagus', 'Putri'];
arr7.splice(1, 2, 'Mega', 'Alfiana')
console.log('7. Method splice \n', arr7.join(', '));

// 5. slice (pertengahan elemen)
// format : slice(indexAwal, indexAkhir)
var arr8 = ['Adam', 'Ravi', 'Bagus', 'Putri'];
var arr9 = arr8.slice(1, 3, 'Mega', 'Alfiana')
console.log('8. Method slice \n', arr9.join(', '));

// 6. foreach
console.log("9. Method foreach");
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Adam', 'Ravi', 'Bagus', 'Putri'];
// foreach untuk elemen saja
angka.forEach(function(e) {
    console.log(e);
});
// foreach untuk elemen dan index
nama.forEach(function(e,i) {
    console.log('Mahasiswa ke-'+ (i+1) + ' : ' +   e);
});

// 7. map
var angka1 = [1,2,3,4,5,6,7,8];
var angka2 = angka1.map(function(e) {
    return e * 2;
});
console.log('10. Method map \n', angka2.join(', '));

// 8. sort
var angka3 = [20,8,5,4,7,10,6,1,3,2];
console.log('11. Method sort \n', angka3.join(', '), '\n=>', 
angka3.sort(function(a,b) {
    return a-b;
}).join(', '));