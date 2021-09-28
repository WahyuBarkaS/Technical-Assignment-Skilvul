/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
- ada 2, local variable dan global variable.
- Local variable adalah variabel yang dideklarasikan di dalam suatu blok bisa berupa function-scoped atau block-scoped. 
Sedangkan, Global variable adalah variabel yang dideklarasikan di luar blok.
*/
// Contoh Global 
let myName = "Wahyu"

function greeting(){
    return myName
}
console.log(myName)

// Contoh Local
function greeting(){
    let myName = "Wahyu"
    return myName
}

console.log(greeting())
console.log(myName)

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - Yang akan tampil di dalam console.log adalah Mariah
/* - karena yang berada pada console.log adalah fungsi printFirstName dengan parameter "Mariah Carey".
Meskipun di awal terdapat deklarasi variabel name dengan nilai "John Watson", akan tetapi hal tersebut
tidak mempengaruhi parameter dari printFirstName karena variabel name dengan nilai "John Watson"
berada di luar function printFirstName.
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
