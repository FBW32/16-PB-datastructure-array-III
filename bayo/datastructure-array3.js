// 23.08.2020
// Declare a variable named myArr and assign an array to the variable e.g. input ==>

let myArr = [ 
    'item1',
    'item2',
    [2,3,4,
        ['subItem1','subItem2',['subSubItem1','subSubItem2']]]];
    

        console.log(myArr);
        

// // EXERCISE a
// // clone the array.
let clone =  ([myArr]); 
console.log(clone);  // [ [ 'item1', 'item2', [ 2, 3, 4, [Array] ] ] ]


// // EXERCISE b
// // store subSubItem2 in var and remove it.
let extractSub2 = (myArr.slice(-2));
console.log(extractSub2);




// shift subSubItem2 as first item in array.
console.log(extractSub2.shift());