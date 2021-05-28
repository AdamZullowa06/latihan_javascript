var angkot = 1;
var jmlAngkot = 10;
var angkot_aktif = 6;
while (angkot <= angkot_aktif) {
    console.log("Angkot No. " + angkot + " beroperasi dengan baik.");
    angkot++;
}

for (angkot = angkot_aktif + 1; angkot <= jmlAngkot; angkot++) {
    console.log("Angkot No. " + angkot + " sedang tidak beroperasi.")
}