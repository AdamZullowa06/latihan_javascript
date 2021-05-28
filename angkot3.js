var angkot = 1;
var jmlAngkot = 10;
var angkot_aktif = 5;

for (angkot; angkot <= jmlAngkot; angkot++) { 
    if(angkot <= angkot_aktif) {
        console.log("angkot No." + angkot + " beroperasi dengan baik");
    } else {
        console.log("angkot No." + angkot + " sedang tidak beroperasi.");
    }
}