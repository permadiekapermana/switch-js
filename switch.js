var menu = prompt('Masukkan nama makanan / minuman.\nContoh : sayur, tomat, apel, mangga, aqua, burger, seblak, mie');

switch (menu){
    case 'sayur':
    case 'tomat':
    case 'apel':
    case 'mangga':
    case 'aqua':
        alert('Makanan / Minuman yang anda masukkan termasuk kategori MAKANAN / MINUMAN SEHAT');
    break;
    case 'burger':
    case 'seblak':
    case 'mie':
        alert('Makanan / Minuman yang anda masukkan termasuk kategori MAKANAN / MINUMAN TIDAK SEHAT');
    break;
    default:
        alert('Makanan / Minuman yang anda masukkan tidak dikenal oleh sistem kami!');
}