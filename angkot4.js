var angkot = 1;
var jmlAngkot = 10;
var angkot_aktif = 5;
var angkot_keluar = 8;

for (angkot; angkot <= jmlAngkot; angkot++) { 
    if(angkot <= angkot_aktif) {
        console.log("angkot No." + angkot + " beroperasi dengan baik");
    } else if(angkot == angkot_keluar) {
        console.log("angkot No." + angkot + " sedang lembur.");
    } else {
        console.log("angkot No." + angkot + " sedang tidak beroperasi.");
    }
}