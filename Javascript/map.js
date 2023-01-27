//.map()

// let array = [5, 10, 15, 20];
// let newArray = [];
// for(let i=0; i<array.length; i++) {
//     newArray[i]=array[i]*array[i];
// }
// console.log(newArray);

let array = [5, 10, 15, 20];

function functionForMap(element) {
    return element * element;
}
let newArray = array.map(functionForMap);
console.log(newArray);

let addTwoNumbers=(a,b)=>a+b;
let num1=4;
let num2=5;
addTwoNumbers(num1, num2);