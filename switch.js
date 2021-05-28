var item = prompt("masukan nama makanan/minuman :\n (nasi, daging, susu, burger, softdrink");

switch(item) {
    case 'nasi':
    case 'daging':
    case 'susu' :
        alert("makanan/minuman sehat");
        break;
    case 'burger':
    case 'softdrink':
        alert("makanan/minuman tidak sehat");
        break;
    default:
        alert("nama makanan/minuman tidak valid");
        break;
}