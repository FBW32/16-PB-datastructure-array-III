// # 16-PB-datastructure-array-III

// # Array Exercises
// ## These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// ### Declare a variable named myArr and assign an array to the variable e.g. input ==>

//      [  'item1',
//         'item2',
//       [
//            2,
//            3,
//            4,
//           [
//            'subItem1','subItem2',
//             [
//              'subSubItem1', 'subSubItem2'
//             ]
//           ]
//     ] ]

let myArray = [
  "item1",
  "item2",
  [2, 3, 4, ["subItem1", "subItem2", ["subSubItem1", "subSubItem2"]]],
];
console.log(myArray);
// [ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]

// 1. clone the array.

let varQ1 = [...myArray];
console.log(varQ1);
// [ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]

// 2.  store subSubItem2 in var and remove it.

console.log(myArray[2][3][2][1]); // subSubItem2

let varQ2 = myArray[2][3][2][1];
console.log(varQ2); // subSubItem2

myArray[2][3][2].pop();
console.log(myArray[2]);

// [ 2, 3, 4, [ 'subItem1', 'subItem2', [ 'subSubItem1' ] ] ]

// 3. shift subSubItem2 as first item in array.

// output ==>

//      [

//         'subSubItem2',
//         'item1',
//         'item2',
//         [
//          2,
//          3,
//          4,
//           [
//            'subItem1','subItem2', ['subSubItem1']
//           [

//     ] ]

myArray.unshift(varQ2);
console.log(myArray);

// [
//   'subSubItem2',
//   'item1',
//   'item2',
//   [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ]
// ]
