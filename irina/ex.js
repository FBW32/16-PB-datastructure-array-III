// # Array Exercises 

// ## These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// ### Declare a variable named myArr and assign an array to the variable e.g. input ==> 

let myArr = [  'item1',
'item2',
[
   2,
   3,
   4,
  [
   'subItem1','subItem2',
    [
     'subSubItem1', 'subSubItem2'
    ] ] ] ];

 //console.log(myArr);

// 1. clone the array.
 let myArr2 = myArr;

// 2.  store subSubItem2 in var and remove it.
myArr3 = myArr2[2][3][2].pop();
console.log(myArr3); //subSubItem2
console.log(myArr2); 
/*[ 'item1',
'item2',
[ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]*/

// 3. shift subSubItem2 as first item in array.

let myArr4 = myArr2.unshift("subSubItem2");
console.log(myArr2); //
/*[ 'subSubItem2',
'item1',
'item2',
[ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ] */
