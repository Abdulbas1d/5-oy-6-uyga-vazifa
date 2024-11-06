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

// let obj = {
//     name: "Alisher",
//     email: "test@gmail.com",
//     family: {
//         fatherName: "Farhod",
//         motherName: "Nargiza",
//         brotherName: "Akbar"
//     },
//     age: 45,
//     weight: 70 
// }
// function sortObjKeys(arg) {
//     let sortedKeys = Object.keys(arg).sort();
//     let res = {};
//     for (const key of sortedKeys) {
//         res[key] = arg[key]
//     }
//     return res
// }
// console.log(sortObjKeys(obj));





// 2-Misol

// Obyekt kalitlarini va qiymatlarini alohida massivga o‘tkazing: Obyektdagi barcha kalitlar va qiymatlar alohida-alohida massivda qaytarilsin.

// let obj = {
//     name: "Alisher",
//     age: 45,
//     email: "test@gmail.com",
//     phoneNumber: +498794455555,
//     weight: 72
// }
// function sortKeysAndValues(arg) {
//     let keys = Object.keys(arg);
//     let values = Object.values(arg);

//     return {
//         Kalitlari: keys,
//         Qiymatlari: values
//     }
// }
// console.log(sortKeysAndValues(obj));





// 3-Misol

// Obyekt birlashtirish: Ikkita obyekt berilgan. Ularni birlashtirib, umumiy kalitlarni yangilash orqali natijaviy obyekt yarating.

// let obj1 = {
//     name: "Alisher",
//     age: 45,
//     email: "test@gmail.com",
//     phoneNumber: +98745632
// };
// let obj2 = {
//     name: "Jahongir",
//     phoneNumber: +98745632
// };
// function twoObjectAdd(arg1, arg2) {
//     let merge = Object.assign({}, arg1, arg2)
//     return merge
// }
// console.log(twoObjectAdd(obj1, obj2));




// 4-Misol

// Qiymatlarni hisoblash: Berilgan obyekt qiymatlarining umumiy yig‘indisini hisoblang (qiymatlar sonlar bo'lishi kerak).

// let obj = {
//     name: "Alisher",
//     age: 54,
//     email: "test@gmail.com",
//     weight: 70
// }
// function countValuesObj(arg) {
//     let res = 0;
//     for (const key in arg) {
//         if (typeof arg[key] === 'number') {
//             res += arg[key]
//         }
//     }

//     return res
// }
// console.log(countValuesObj(obj));




// 5-Misol

// Kalitni qayta nomlash: Obyekt ichidagi bir kalit nomini yangi nomga o'zgartiring va qaytaring.

// let obj = {
//     name: "Alisher",
//     age: 45,
//     email: "test@gmail.com",
//     phoneNumber: +98745631
// }
// function renameKey(arg, oldKey, newKey) {
//     if (oldKey in arg) {
//         arg[newKey] = arg[oldKey]
//         delete arg[oldKey]
//     }
//     return arg
// }
// console.log(renameKey(obj, "age", "yearsOld"));





// 6-Misol

// Kalitni olib tashlash: Berilgan obyekt va kalit orqali kalitni olib tashlab, yangi obyekt qaytaring.

// let obj = {
//     name: "Alisher",
//     age: 45,
//     weight: 70
// };
// function removeKey(arg, keyToRemove) {
//     let newObj = { ...arg };
//     if (keyToRemove in newObj) {
//         delete newObj[keyToRemove];
//     }
//     return newObj;
// }
// console.log(removeKey(obj, "age"));





// 7-Misol

// Bir xil kalitli obyektlarni birlashtirish: Berilgan massiv ichidagi obyektlarni bir xil kalit bo‘yicha guruhlab, yangi obyekt yarating.

// let products = [
//     {name: "apple", quantity: 10, category: "fruit"},
//     {name: "carrot", quantity: 5, category: "vegetable"},
//     {name: "banana", quantity: 8, category: "fruit"},
//     {name: "broccoli", quantity: 6, category: "vegetable"},
//     {name: "rice", quantity: 20, category: "grain"}
// ];
// function findSameKey(arr, key) {
//     let res = {};
//     let keyValue = [];
//     for (let item of arr) {
//         keyValue = item[key];
//         if (!res[keyValue]) {
//             res[keyValue] = [];
//         }
//         res[keyValue].push(item);
//     }
//     return res;
// }
// console.log(findSameKey(products, "category"));





// 8-Misol

// Obyekt ichida massivlarni yig'ish: Obyekt ichidagi barcha massivlarni bitta massivga yig‘ing va natijani qaytaring.

// let obj = {
//     arr1: [1, 2, 3],
//     name: "Alisher",
//     isMarried: true ,
//     arr2: [4, 5, 6]
// };
// function collectArrays(obj) {
//     let res = [];
//     for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//             res = res.concat(obj[key]);
//         }
//     }
//     return res
// }
// console.log(collectArrays(obj));




// 9-Misol

// O‘xshash obyektlarni chiqarish: Berilgan ikkita massiv ichidagi obyektlarning umumiy qismlarini toping.

// let arr1 = [
//     {name: "Alisher", age: 30},
//     {name: "Akbar", age: 25},
//     {name: "Anvar", age: 35}
// ];
// let arr2 = [
//     {name: "Akbar", age: 25},
//     {name: "Anvar", age: 35},
//     {name: "Jamshid", age: 40}
// ];
// function findCommonObj(arr1, arr2) {
//     const commonObj = []; 
//     for (let obj1 of arr1) {
//         for (let obj2 of arr2) {
//             if (isEqual(obj1, obj2)) { 
//                 commonObj.push(obj1);
//                 break;
//             }
//         }
//     }
//     return commonObj;
// }
// function isEqual(obj1, obj2) {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//     for (let key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(findCommonObj(arr1, arr2));





// 10-Misol

// Obyektning chuqurligini aniqlash: Obyekt ichma-ich obyektlardan tashkil topgan bo‘lsa, uning chuqurligini (depth) topadigan funksiya yozing.

// let obj = {
//     name: "Alisher",
//     age: 40,
//     family: {
//         fatherName: "Alijon",
//         motherName: "Gulchexra",
//         sisterFamily: {
//             sisterSonName: "Ali",
//             sisterHusbandName: "Shuxrat",
//             sisterMotherInLawFamily: {
//                 motherInLawName: "Sevara",
//                 fatherInLawName: "Farxod",
//             }
//         }
//     }
// }
// function getObjDepth(arg) {
//     let maxDepth = 1;
//     let depth;
//     for (let key in arg) {
//         if (typeof arg[key] === "object" && arg[key] !== null) { 
//             depth = getObjDepth(arg[key]) + 1;
//             maxDepth = Math.max(maxDepth, depth);
//         }
//     }

//     return maxDepth;
// }
// console.log(getObjDepth(obj));








//////////----- String bilan ishlash -----//////////





// 1-Misol

// Palindromni tekshirish: Berilgan so‘z yoki jumlaning palindrom ekanligini tekshiruvchi funksiya yozing (bo‘sh joy va katta-kichik harflarni inobatga olmang).

// let str = "A man, a plan, a canal, Panama";
// function isPalindrome(str) {
//     str = str.toLowerCase();
//     let cleanedStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')) {
//             cleanedStr += str[i];
//         }
//     }
//     let reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }
// console.log(isPalindrome(str));





// 2-Misol

// So‘zlarni tersga o‘girish: Berilgan jumladagi so‘zlarni teskari tartibda joylashtiruvchi funksiya yozing.

// let str = "Assalomu alaykum";
// function reverseStr(str) {
//     return str.split('').reverse().join(' ');
// }
// console.log(reverseStr(str));




// 3-Misol

// Eng uzun so‘zni toping: Berilgan jumladagi eng uzun so‘zni topib, uni qaytaruvchi funksiya yozing.

// let fruits = ["Apelsin", "Gilos", "Olma", "Banan", "Qulupnay"];
// function findBigLenthElement(str) {
//     let max = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] > max) {
//             max = str[i]
//         }
//     }
//     return max
// }
// console.log(findBigLenthElement(fruits));





// 4-Misol

// Bir harfni ko‘paytirish: Berilgan string ichidagi ma’lum bir harfni ko‘paytirish kerak (masalan, har bir `a` harfidan keyin qo‘shimcha `a` qo‘shing).

// let str = "Assalomu alaykum";
// let char = 'a'
// function repeatChar(str, char) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             res += char + char
//         } else {
//             res += str[i] 
//         }
//     }
//     return res
// }
// console.log(repeatChar(str, char));





// 5-Misol

// Stringdan raqamlarni olib tashlash: Berilgan string ichidan barcha raqamlarni olib tashlab, qolgan qismni qaytaring.

// let str = "Assa1lo2mu4 al9ay6k4um";
// function removeNumberInString(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!(str[i] >= "0" && str[i] <= "9")) {
//             res += str[i]
//         }
//     }
//     return res
// }
// console.log(removeNumberInString(str));