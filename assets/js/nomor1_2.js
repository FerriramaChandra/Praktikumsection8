var a = 5;
var b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;  // Pada soal nomor 1 bagian b, kode pada bagian ini membutuhkan nilai true agar dapat tereksekusi
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
        "berasal dari " + 
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

// a = b;
// nama = b;

// console.log("asal diakses = " + asal);
// console.log("a adalah = " + a);
// console.log("b adalah = " + b);


// Nomor 1
// Bagian a
// Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
console.log(lengkap_arr[2]);

// Bagian b
// Ubah kode diatas sehingga dapat menampilkan baris 22 dalam console
// Mengubah nilai boolean dari line 4 dari false menjadi true

// Bagian c
// Lakukan pemanggilan untuk function perkenalan
perkenalan();




// Nomor 2
// Bagian a
// Jelaskan kenapa bari 22, 23, 24, tidak tampil di layar ?
// Karena pada kode line 4, di awal menggunakan boolean false sebagai nilainya, sehingga kondisi dari if yang ditetapkan tidak terpenuhi

// Bagian b
// Jelaskan kenapa deklarasi pada baris 26 menyebabkan error
// Karena nilai dari const secara default tidak dapat diubah isinya, atau bersifat tetap

// Bagian c
// Dengan melakukan komen pada baris ke 26 apakah baris ke 28 dapat dieksekusi ? Jelaskan
// Tidak, dikarenakan variabel asal ada di dalam function, sehingga variabel tersebut bersifat lokal, oleh karena itu tidak dapat diakses jika tidak di dalam function yang sama