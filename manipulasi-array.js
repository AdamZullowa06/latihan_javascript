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