// membuat object

// cara 1
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// this mengembalikan object global

// cara 2 - object literal
var obj = {};
obj.halo = function() {
    console.log(this);
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
    console.log('halo');
}
new Halo();