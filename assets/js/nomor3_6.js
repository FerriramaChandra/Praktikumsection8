// 3. Lakukan destructuring pada kode di bawah sehingga Budi tersimpan dalam variable bernama a, Sita tersimpan dalam variabel bernama b, dan Ayu tersimpan dalam variabel bernama caches.
const foo = ['Budi', 'Sita', 'Ayu'];
const [a, b, c] = foo;
console.log(a);
console.log(b);
console.log(c);

// 4 Kalian memiliki sebuah variabel berikut (let bdays = ['10-17', '05-19', '20-19']). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang keluar dalam console menjadi ['10/17', '05/19', '20/19']
let bdays = ['10-17', '05-19', '20-19'];
let slash = bdays.map(z => z.replace('-','/'))
console.log(slash);

// 5 Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap volume dalam array tersebut dengan dua. sehingga ketika dipanggil variabel value mengeluarkan outpun berupa [2,4,6,8,10,12]
let value = [1,2,3,4,5,6];
let multiply = value.map(x => x * 2);
console.log(multiply);

// 6. Kalian memiliki variabel berikut (let arr = [1.5, 2.56, 5.1, 12.33]) bulatkan ke atas variabel tersebut sehingga output yang dihasilkan adalah [2, 3, 5, 12]
let arr = [1.5, 2.56, 5.1, 12.33]
let number = arr.map(y => Math.round(y));
console.log(number);
