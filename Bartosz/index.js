// 16-PB-datastructure-array-III

// Array Exercises 
// These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// Declare a variable named myArr and assign an array to the variable e.g. input ==> 
let myArr = ['item1', 'item2', [2, 3, 4, ['subItem1','subItem2', ['subSubItem1', 'subSubItem2']]]]; 

// 1. clone the array.
let arrClone = [...myArr];
console.log(arrClone); // [ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]

// 2.  store subSubItem2 in var and remove it.
let subSubItem2 = myArr[2][3][2][1];
console.log(subSubItem2) // subSubItem2

myArr[2][3][2].pop();
console.log(myArr[2]); // [ 2, 3, 4, [ 'subItem1', 'subItem2', [ 'subSubItem1' ] ] ]

// 3. shift subSubItem2 as first item in array.
myArr.unshift(subSubItem2);
console.log(myArr); // [ 'subSubItem2', 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]