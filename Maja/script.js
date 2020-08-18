/* Declare a variable named myArr and assign an array to the variable e.g. input ==> */
let myArr = [
  "item1",
  "item2",
  [2, 3, 4, ["subItem1", "subItem2", ["subSubItem1", "subSubItem2"]]],
];
console.log(myArr); // [ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]

/* clone the array.*/

/* let myArrClone = myArr.map((x) => x); */
let myArrClone = [...myArr];
console.log(myArrClone); // [ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]

/* 2. store subSubItem2 in var and remove it.
 */
let subSubItem2 = myArr[2][3][2][1];
console.log(subSubItem2); // subSubItem2

/* myArr.pop(); */
myArr[2][3][2].pop();
console.log(myArr[2][3][2]);

/* 3. shift subSubItem2 as first item in array.
 */

myArr.unshift(subSubItem2);
console.log(myArr); // ['subSubItem2','item1','item2',[ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ]
