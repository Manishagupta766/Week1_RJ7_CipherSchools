//Object Destructuring

let details = {
    name : "Manisha",
    age : 21,
    address: {
        city: "Patna",
        district: "Patna",
        state: "Bihar",
        country:"India",
        passportDetails:{
        passportNumber:"ABCD1234",

    },
},
};
// console.log(details.address.passportDetails.passportNumber);
// console.log(details.address);
let passportNumber=details.address.passportDetails.passportNumber;
console.log(passportNumber);