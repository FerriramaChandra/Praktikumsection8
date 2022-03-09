// Bagian d
// Kalian bebas mengubah kode di atas sehingga menampilkan output pada console
var a = 5;
var b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true; 
let lengkap_arr = [a, b, nama, terdaftar];


function perkenalan(){
    let asal = "indonesia";
    return console.log(
        "Pekenalkan nama saya " +
        nama + 
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " + 
        b + 
        ", berasal dari " + 
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
console.log("Array =" + nama);
console.log("a adalah = " + b);
console.log("b adalah = " + b);
perkenalan();