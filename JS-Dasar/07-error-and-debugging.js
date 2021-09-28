/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
- Type Error adalah error yang muncul jika kita menggunakan nilai yang berada di luar kisaran tipe yang diharapkan
- Reference Error adalah error yang muncul jika kita menggunakan (referensi) variabel yang belum dideklarasikan.
- Range Error adalah error yang terjadi jika kita menggunakan angka yang berada di luar rentang nilai legal.
Misalnya: Kita tidak dapat mengatur jumlah digit signifikan sebuah angka menjadi 500.
- Syntax Error adalah Error yang muncul jika kita mencoba mengevaluasi kode dengan kesalahan sintaks.
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*
Apabila kode tersebut dijalankan, akan terjadi undefined dan ReferenceError.
Hal ini terjadi karena kode tersebut melakukan console.log sebelum variabelnya dideklarasikan.
Sehingga akan terjadi Error. 
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
