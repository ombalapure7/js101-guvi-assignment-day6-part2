/**
 * Fixing bugs here: 
 *  https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d
 */

/**
 * BUG 1
 */
/* No need to redeclare f s and t again inside the function aa() */
// aa = (f, s, t) => {
//   console.log(f, s, t);
//   if (f > s && f > t) {
//     console.log(f);
//   } else if (s > f && s > t) {
//     console.log(s);
//   } else {
//     console.log(t);
//   }
// };
// aa(1, 2, 3);

/**
 * BUG 2
 */
/* Remove last digit of the number in each iteration and reduce the number by divding
  it by 10 and maintain a "sum" to add up the extracted number in every iteration */
// let n = 123;
// console.log(add(n));
// function add(n) {
//   let sum = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     sum += digit;
//     n /= 10;
//     n = Math.round(n);
//   }
//   return sum;
// }

/**
 * BUG 3
 */
/* 
- Either replace i <= arr.length with i < arr.length
- Or replace i <= arr.length with i <= arr.length - 1
*/
// (function (arr) {
//   let sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// })([9, 8, 5, 6, 4, 3, 2, 1]);

/**
 * BUG 4
 */
/* The array was passed to ano() as a result the an error was getting thrown */
// var arro = ["guvi", "geek", "zen", "fullstack"];
// var ano = function (arro) {
//   for (var i = 0; i < arro.length; i++) {
//     console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//   }
// };
// ano(arro);

/**
 * BUG 5
 */
/* When a NON PRIME is encountered skip the iteration
  Else return num */
// const newArray = [1, 3, 2, 5, 10];
// const myPrime = newArray.filter((num) => {
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       continue;
//     } else {
//       return num;
//     }
//   }
// });
// console.log(myPrime);

/**
 * BUG 6
 */
/*
- First rename the callback function to from sum to something else 
- Pass an initial value of accumlator i.e. 0 
- The callback function is called for n times, n - is the no. of elements in the array
*/
// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const adder = (a, b) => a + b;
// const sum = num.reduce((num, acc) => {
//   return adder(num, acc);
// }, 0);
// console.log(sum);

/**
 * BUG 7
 */
/* Pass arr to the IIFE */
// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function (arr) {
//   out = arr.slice(k + 1, arr.length);
//   var count = out.length;
//   for (var i = 0; i < k + 1; i++) {
//     out[count] = arr[i];
//     count += 1;
//   }
//   console.log(out);
// })(arr);

/**
 * BUG 8
 */
/* 
- Either replace i <= arr.length with i < arr.length
- Or replace i <= arr.length with i <= arr.length - 1
*/
// var arr = ["guvi", "geek", "zen", "fullstack"];
// (function () {
//   for (var i = 0; i < arr.length - 1; i++) {
//     console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
//   }
// })();

/**
 * BUG 9
 */
/* No BUG encountered in the code */
// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();

/**
 * BUG 10
 */
/* Pass "" instead of " " to the split() function */
// (function (str) {
//   var str1 = str.split("").reverse().join("");
//   console.log(str1);
// })("abcd");

/**
 * BUG 11
 */
/* 
- Convert each string to lower case 
- Create a new array and check whether each string in arr is present in it
- If not present i.e. if indexOf(arr[i]) === -1 then add it to newArr
*/
// var res = function (arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     let str = arr[i];
//     str = str.toLowerCase();
//     if (newArr.indexOf(str) == -1) {
//       newArr.push(str);
//     }
//   }
//   console.log(newArr);
// };
// res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

/**
 * BUG 12
 */
/* Initialize new_object as {} */
// var array = [
//   [
//     ["firstname", "vasanth"],
//     ["lastname", "Raje"],
//     ["age", 24],
//     ["role", "JSWizard"],
//   ],
//   [
//     ["firstname", "Sri"],
//     ["lastname", "Devi"],
//     ["age", 28],
//     ["role", "Coder"],
//   ],
// ];
// var final = [];
// while (array.length != 0) {
//   var outer_remove = array.shift();
//   var new_object = {};
//   while (outer_remove.length != 0) {
//     var inner_remove = outer_remove.shift();
//     var key = inner_remove[0];
//     var value = inner_remove[1];
//     new_object[key] = value;
//   }
//   final.push(new_object);
// }
// console.log(final);

/**
 * BUG 13
 */
/* Pass an initial accumalator value i.e. 0 - this will fix the bug */
// var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
// var s = as.reduce(function (a, c) {
//   if (c % 2 !== 0) {
//     return a + c;
//   }
//   return a;
// }, 0);
// console.log(s);

/**
 * BUG 14
 */
/* Declare var l = "" outside the loop */
// aa = (data) => {
//   var a = data;
//   var l = "";
//   for (i = 0; i < a.length - 1; i++) {
//     var s = a[i+1];
//     var b = a[i];
//     l += s;
//     l += b;
//     i = i + 1;
//   }
//   if (a.length % 2 != 0) {
//     l += a[a.length - 1];
//   }
//   console.log(l);
// };
// aa("1234");
