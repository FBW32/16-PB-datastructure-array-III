// # 16 - PB - datastructure - array - III

// # Array Exercises 
// ## These exercises are aimed at practicing arrays and array methods.Print each task to the console.

// ### Declare a variable named myArr and assign an array to the variable e.g.input ==>

//     ['item1',
//         'item2',
//         [
//             2,
//             3,
//             4,
//             [
//                 'subItem1', 'subItem2',
//                 [
//                     'subSubItem1', 'subSubItem2'
//                 ]
//             ]
//         ]]

let myArr =
    ['item1',
        'item2',
        [
            2,
            3,
            4,
            [
                'subItem1', 'subItem2',
                [
                    'subSubItem1', 'subSubItem2'
                ]
            ]
        ]
    ];
console.log(myArr);

// NOTE: the terminal is only able to show 3 nested arrays i.e.
console.log(myArr[2]);
// [
//     2,
//     3,
//     4,
//     [ 'subItem1', 'subItem2', 
//         [ 'subSubItem1', 'subSubItem2' ] 
//     ]
// ]


// QUESTION 1. clone the array.

let clonedArr1 = [...myArr];
console.log('This is a cloned array', clonedArr1);
// [ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]



// QUESTION 2.  store subSubItem2 in var and remove it.

// ATTEMPT 1

// STORE
let storedItem1 = myArr[2][3][2][1];
console.log(storedItem1);
// subSubItem2

// REMOVE
myArr[2][3][2].pop();
console.log(myArr[2]);




// QUESTION 3. shift subSubItem2 as first item in array.
//     output ==>
//     [
//         'subSubItem1',
//         'item1',
//         'item2',
//         [
//             2,
//             3,
//             4,
//             [
//                 'subItem1', 'subItem2', ['subSubItem1']
//                 [
//                 ]];

myArr.unshift("subSubItem2");
console.log(myArr);
// [
//   'subSubItem2',
//   'item1',
//   'item2',
//   [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ]
// ]