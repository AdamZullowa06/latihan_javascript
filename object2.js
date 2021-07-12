// Object Literal
var mhs1 = {
    nama : 'Adam Zullowa',
    nrp : '043040023',
    email : 'adamzullowa06@gmail.com',
    jurusan : 'Teknik Informatika'
};

var mhs2 = {
    nama : 'Ravi Rahadian',
    nrp : '043021003',
    email : 'ravirahadian@gmail.com',
    jurusan : 'Tata Boga'
};

// Function declaration
function tambahMahasiwa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = tambahMahasiwa('Adam Zullowa', '043040023', 'adamzullowa06@gmail.com', 'Teknik Informatika');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Adam Zullowa', '043040023', 'adamzullowa06@gmail.com', 'Teknik Informatika');