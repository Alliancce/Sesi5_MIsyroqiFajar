function segitiga(tinggi) {
  for (let i = 1; i <= tinggi; i++) {
    let baris = '';
    for (let j = 1; j <= i; j++) {
      baris += '*';
    }
    console.log(baris);
  }
}

// Contoh penggunaan:
segitiga(5);