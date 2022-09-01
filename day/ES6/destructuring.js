//Destructuring
var arr = [1,2,3,4,5,6,7,8,9];
let x = a[0];
let y = a[1];
let z = a[9];

// let [a,b] = arr;
// console.log(a);
// console.log(b);


let [a,b,c,,,,,,t] = arr;
console.log(t);

//destructuring with object

// let person = {
//     name : "astha",
//     age : 30,
//     mobile :123456,
//     email:"abcgmail.com",
// };
// console.log(person.mobile);

let {mobile,email,city}=person;
console.log(mobile);

//actual object will not change

