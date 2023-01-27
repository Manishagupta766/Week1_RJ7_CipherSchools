//.filter()

// let array = [10,20,30,40,50];
// let newArray= array.filter((element)=>element>=30);
// console.log(newArray);

let array=[10,20,30,40,50];
let temp=array.find((value)=>{
    return value>20;
});
console.log(temp);