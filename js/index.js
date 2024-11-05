//////////----- Massivlar bilan ishlash -----//////////



// 1-Misol

// Ikki massivning kesishmasini toping: Ikkita massiv berilgan. Ulardagi umumiy elementlardan tashkil topgan yangi massiv yarating.

// let arr1 = [1, 2, 5, 8, 9];
// let arr2 = [5, 3, 12, 9, 2];
// function findIntersection(arg1, arg2) {
//     let res = [];
//     for (let i = 0; i < arg1.length; i++) {
//         for (let j = 0; j < arg2.length; j++) {
//             if (arg1[i] === arg2[j]) {
//                 res.push(arr1[i])
//                 break
//             }
//         }
//     }
//     return res
// }
// console.log(findIntersection(arr1, arr2));




// 2-Misol

// Massivdagi raqamlarni ko'paytirish: Massiv elementlarini berilgan koeffitsiyentga ko'paytirib, natija massivini qaytaruvchi funksiya yozing.

// let arr = [2, 4, 6, 8, 10];
// let coefficient = 3;
// function coefficientArr(arg, coefficient) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         res.push(arg[i] * coefficient);
//     }

//     return res
// }
// console.log(coefficientArr(arr, coefficient));




// 3-Misol

// Massivdagi musbat sonlar yig'indisi: Massivdan musbat sonlarni tanlab, ularning yig'indisini hisoblang.

// let arr = [12, 32, -54, 46, -5];
// function findMusbatNumbers(arg) {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] > 0) {
//             sum += arg[i]
//         }
//     }
//     return sum
// }
// console.log(findMusbatNumbers(arr));




// 4-Misol

// Nolni oxiriga o‘tkazing: Berilgan massivdagi barcha `0`larni massiv oxiriga ko‘chiring, qolgan tartib o‘zgarmasligi kerak.

// let arr = [12, 0, 54, 41, 0];
// function insteadZero(arg) {
//     let res = []
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] !== 0) {
//             res.push(arg[i])
//         }
//     }
//     let zeroNumbers = arg.length - res.length;
//     for (let j = 0; j < zeroNumbers; j++) {
//         res.push(0);
//     }
//     return res
// }
// console.log(insteadZero(arr));




// 5-Misol

// Eng ko'p takrorlangan elementni toping: Massivda eng ko‘p uchraydigan elementni va uning sonini qaytaruvchi funksiya yozing.

// let arr = [1, 26, 13, 5, 4, 32, 14, 4];
// function findSameNumbers(arg) {
//     let count = {};
//     let element = [];
//     for (let i = 0; i < arg.length; i++) {
//         element = arg[i];
//         if (count[element]) {
//             count[element]++
//         } else {
//             count[element] = 1
//         }
//     } 
//     let mostFrequent;
//     let maxCount = 0;
//     for (const element in count) {
//         if (count[element] > maxCount) {
//             mostFrequent = element
//             maxCount = count[element]
//         }
//     }
//     return { element: mostFrequent, count: maxCount };
// }
// console.log(findSameNumbers(arr));




// 6-Misol
