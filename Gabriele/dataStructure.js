// Declare a variable named myArr and assign an array to the variable e.g. input ==>

let myArr = [  'item1','item2', [ 2, 3, 4, [ 'subItem1','subItem2',[ 'subSubItem1', 'subSubItem2'] ]] ];

// 1. clone the array.


let myArr2 = [...myArr]; 
console.log('cloned array', myArr2); // cloned array [ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]


// 2. store subSubItem2 in var and remove it.

console.log(myArr[2][3][2][1]); // subSubItem2

let subSubItem = myArr[2][3][2][1];
console.log(subSubItem);

myArr[2][3][2].pop();  // [ 2, 3, 4, [ 'subItem1', 'subItem2', [ 'subSubItem1' ] ] ]

console.log('test to check if item is removed', myArr[2]); // [ 2, 3, 4, [ 'subItem1', 'subItem2', [ 'subSubItem1' ] ] ]


// 3. shift subSubItem2 as first item in array.

myArr.unshift("subSubItem2");
console.log(myArr);   // ['subSubItem2',  'item1',  'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ]]