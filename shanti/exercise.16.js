// 16-PB-datastructure-array-III
let myArr = [
    'item1',
    'item2',
    [
    2,
    3,
    4,
        [
            'subItem1','subItem2',
            [
                'subSubItem1', 'subSubItem2'
            ]
        ]
   ]
];

/* 1. clone the array. */
let arr2 = JSON.stringify(myArr);
console.log(arr2); // ["item1","item2",[2,3,4,["subItem1","subItem2",["subSubItem1","subSubItem2"]]]]

/* 2. store subSubItem2 in var and remove it. */
var storedItem = myArr[2][3][2][1];
console.log(storedItem); // subSubItem2

myArr[2][3][2].pop();
console.log('Array after removing subSubItem2: ', myArr[2]); // Array after removing subSubItem2: [ 2, 3, 4, [ 'subItem1', 'subItem2', [ 'subSubItem1' ] ] ]  

/* 3. shift subSubItem2 as first item in array. */
myArr[2].unshift("subSubItem2");
console.log('Shifting subSubItem2 as first item in array: ', myArr[2]);   // Shifting subSubItem2 as first item in array:  [ 'subSubItem2', 2, 3, 4, [ 'subItem1', 'subItem2', [ 'subSubItem1' ] ]]

  