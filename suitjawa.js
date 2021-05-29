var rematch = true;

while(rematch) {
    var player = prompt("pilih : gajah, semut, orang");
    
    var cpu = Math.random();
    
    if(cpu < 0.34) {
        cpu = 'gajah';
    } else if(cpu >= 0.34 && cpu < 0.67) {
        cpu = 'orang';
    } else {
        cpu = 'semut';
    }
    
    var hasil = '';
    
    if(player == cpu) {
        hasil = 'HASIL SERI !';
    } else if(player == 'gajah') {
        // if (cpu == 'orang') {
        //     hasil = 'Menang!';
        // } else {
        //     hasil = 'Kalah!';
        // }
        hasil = (cpu == 'orang') ? 'KAMU MENANG !' : 'KAMU KALAH !';
    } else if(player == 'orang') {
        hasil = (cpu == 'semut') ? 'KAMU MENANG !' : 'KAMU KALAH !';
    } else if(player == 'semut') {
        hasil = (cpu == 'gajah') ? 'KAMU MENANG !' : 'KAMU KALAH !';
    } else {
        hasil = 'pilihan tidak valid !!';
    }
    
    alert(hasil + ' \nKamu memilih : ' + player + ', komputer memilih : ' + cpu + '.');
    rematch = confirm('main lagi ?');
}

alert('sampai jumpa !');