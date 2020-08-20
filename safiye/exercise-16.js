//###
let myArr = [
  "item1",
  "item2",
  [2, 3, 4, ["subItem1", "subItem2", ["subSubItem1", "subSubItem2"]]],
];
console.log(myArr); //[ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]
//1 First Try
// let myClone = [...myArr];
// console.log(myClone); //[ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]
// console.log(myClone.indexOf("subSubItem2"));//-1
//1 Second Try
// let myClone = myArr.slice(0);
// console.log(myClone);//[ 'item1', 'item2', [ 2, 3, 4, [ 'subItem1', 'subItem2', [Array] ] ] ]
//1 Third Try
let myClone = myArr.concat();
console.log(myClone);
//["item1","item2",[2,3,4,["subItem1","subItem2",["subSubItem1","subSubItem2"]]]]
//2
// var Item2 = myClone[2][3][2][1];
// console.log(Item2);
let subSub2 = myClone[2][3][2][1];
myClone[2][3][2].pop();
console.log(myClone);
//2
console.log(myClone[2]);
//3
myClone.unshift("subSubItem2");
console.log(myClone);
