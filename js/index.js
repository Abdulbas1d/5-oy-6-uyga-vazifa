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

// Massivni ichma-ich massivlardan tozalang: Ichma-ich massivlardan iborat massiv berilgan. Uni faqat bir darajali massivga o‘tkazing (Flatten array).

// let arr = [1, 2, [5, 6], [8, 9], 9, 10];
// function allMassivOnlyDoneOne(arg) {
//     let res = [];
//     let i = 0;
//     while (i < arg.length) {
//         if (Array.isArray(arg[i])) {
//             arg = arg.slice(0, i).concat(arg[i], arg.slice(i + 1));
//         } else {
//             res.push(arg[i]);
//             i++;
//         }
//     }
//     return res;
// }
// console.log(allMassivOnlyDoneOne(arr));




// 7-Misol

// Ikki massivni birlashtiring: Ikkita massiv berilgan, ularni birlashtirib, takroriy elementlarni olib tashlang.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 6, 7, 8, 5];
// function concatTwoArray(arg1, arg2) {
//     let addTwoArr = arg1.concat(arg2)
//     let res = [];
//     for (let i = 0; i < addTwoArr.length; i++) {
//         if(!res.includes(addTwoArr[i])) {
//             res.push(addTwoArr[i])
//         }
//     }
//     return res
// }
// console.log(concatTwoArray(arr1, arr2));





// 8-Misol

// Massiv elementlarini toq/juft qilib ajrating: Massivdagi toq va juft elementlarni alohida massivlarga ajratib qaytaring.

// let arr = [1, 22, 33, 14, 51, 86, 99, 18];
// function sortArray(arg) {
//     let oddNum = [];
//     let evenNum = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0) {
//             evenNum.push(arg[i])
//         } else {
//             oddNum.push(arg[i])
//         }
//     }
//     return {
//         ToqSonlar: oddNum,
//         JuftSonlar: evenNum
//     }
// }  
// console.log(sortArray(arr));




// 9-Misol

// Massivda ma'lum qiymat borligini tekshirish: Massiv va qiymat berilgan. Funksiya massiv ichida qiymat mavjud bo‘lsa `true`, aks holda `false` qaytarsin.

// let arr = [1, 2, 3, 4];
// let value = 3;
// function hasInArray(arg, value) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] === value) {
//             return true;
//         }
//     }
//     return false
// }
// console.log(hasInArray(arr, value));




// 10-Misol

// Massivdagi eng katta va eng kichik elementni toping: Massivdagi eng katta va eng kichik elementlarni qaytaruvchi funksiya yozing.

// let arr = [1, 39, 45, 78, 54, 17];
// function findMaxNumAndMinNum(arg) {
//     let max = arg[0];
//     let min = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//         if (arg[i] > max) {
//             max = arg[i]
//         }
//         if (arg[i] < min) {
//             min = arg[i]
//         }
//     }
//     return {
//         KattaSon: max,
//         KichikSon: min
//     }
// }
// console.log(findMaxNumAndMinNum(arr));








//////////----- Obyektlar bilan ishlash -----//////////



// 1-Misol

// Obyektni tartiblang: Obyekt ichidagi kalitlari bo‘yicha tartiblangan yangi obyekt hosil qiling.