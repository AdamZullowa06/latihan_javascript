var binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];
// atau
var binatang2 = [];
binatang2 = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];
console.log(binatang.length);

// array menyimpan karater
var hari = ['Senin', 'Selasa', 'Rabu'];

// array menyimpan angka/integer
var angka = [1,10,100];

// array menyimpan karakter, angka, booelan
var arr = ['teks', 2, false];

// array menyimpan function
var myFunction = function() {
    alert('Hello World');
};
var obj = ['teks', 2, false, myFunction];

// array multidimensi (array di dalam array)
var obj2 = ['teks', 2, false, myFunction, [4,5,6]];

// penelusuran index
console.log(obj2[4][1]);