// menu.js

import { kalkulator } from './rumus.js';
import readline from 'readline';

// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Minta input dari pengguna secara berurutan
inputUser.question('Masukkan angka pertama: ', angka1 => {
inputUser.question('Masukkan angka kedua: ', angka2 => {
inputUser.question('Masukkan operator (+, -, *, /): ', operator => {

// Parsing angka ke float
const num1 = parseFloat(angka1);
const num2 = parseFloat(angka2);

// Memanggil fungsi kalkulator untuk menghitung hasil
const hasil = kalkulator(num1, num2, operator);

// Menampilkan hasil
console.log(`Hasil: ${hasil}`);

// Menutup input
inputUser.close();
});
});
});
