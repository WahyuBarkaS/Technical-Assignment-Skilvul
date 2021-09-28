/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let nilai = "";
for (let i = 2; i <= 100; i++) {
    let bagi = 0
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            bagi += 1
        }
    }
    if (bagi === 2) {
        nilai += i + ", "
    }
 }
 console.log(nilai)


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 2;

/// EDIT HERE
let max1 = 1000

while (fiftiethPrime <= max1) {
    let bagi = 0
    let i = 1
    while (i <= fiftiethPrime){
        if (fiftiethPrime % i === 0) {
            bagi += 1
        }
        i++
    }
    if (bagi === 2) {
        primeCounter++
        if(primeCounter == 50) {
            console.log(fiftiethPrime)
            break
        }
    }
    fiftiethPrime++
}



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 1;
let max2 = 1000

/// EDIT HERE
do {
    if (fiftiethOdd % 2 === 1) {
        oddCounter++
        if (oddCounter === 50){
            oddCounter++
            if(oddCounter === 50){
                console.log(fiftiethOdd)
                break
            }
        }
        fiftiethOdd++
    }
} while (fiftiethOdd <= max2)
