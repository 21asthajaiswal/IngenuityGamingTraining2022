//ES5 VARIBLES
var a = 10;  // global scope as well local scope
//ES6 VARIBLES:
//BLOCK SCOPE
// {
//     b=20;
//     console.log(b);
// }
// console.log(b);
//here c is a block variable : its accessiblty is only inside the block
{
    let c= 100;
    console.log(c);
}
// console.log(c);

const sessions = 120;
console.log(sessions);
sessions++;
console.log(sessions);