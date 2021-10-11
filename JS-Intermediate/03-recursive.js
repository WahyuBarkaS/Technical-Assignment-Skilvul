//Soal - 01

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr,i=0) {
    if (i >= arr.length){
        return 0;
    }
    const sum = sumOfArray(arr, i + 1);
    return arr[i] + sum;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//Soal - 02

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length==0){
        return 0;
    }
    const val = arr[0];
    return val + sumOfArray(arr.slice(1));
}

// console.log(sumOfArray(arr1));
// console.log(sumOfArray(arr2));

const avg1 = sumOfArray(arr1) /arr1.length;
const avg2 = sumOfArray(arr2) /arr2.length;
function countAboveAvg(arr, avg) {
    if(arr.length === 0) {
       return 0; 
    }  return (arr[0] >= avg) + countAboveAvg(arr.slice(1), avg)
}
const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

//Soal - 03

const arr = [1, 2, 3, 4, 5];
function searchInArray(data, nilai) {
    if (data.length === 0) {
        return "angka tidak ditemukan"
    }
    if(data[data.length-1] === nilai){
        return "angka ditemukan pada index : " + (data.length-1)
    }
    return searchInArray(data.slice(0,-1), nilai)
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

