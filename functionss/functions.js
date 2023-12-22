//wirte a function to add two numbers
// const a = Number(prompt("enter first number"));
// const b = Number(prompt("enter second number"));
// const c = Number(
//   prompt(`Enter any functons that you want to do:
//         1 - Add
//         2 - sub
//         3 - mult
//         4 - div`)
// );

// Define the function (basic)

// Es5
// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mult(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// Es6
// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };
// const mult = (a, b) => {
//   return a * b;
// };
// const div = (a, b) => {
//   return a / b;
// };

// switch (c) {
//   case 1:
//     const result = add(a, b);
//     console.log(result);
//     break;

//   case 2:
//     const result2 = sub(a, b);
//     console.log(result2);
//     break;

//   case 3:
//     const result3 = mult(a, b);
//     console.log(result3);
//     break;

//   case 4:
//     const result4 = div(a, b);
//     console.log(result4);
//     break;
//   default:
//     alert("Your result will be shown in console");
// }
// // call functiom
// const o = add(a, b);
// console.log(o);
// const p = sub(a, b);
// console.log(p);
// const i = mult(a, b);
// console.log(i);
// const u = div(a, b);
// console.log(u);

// Es5
// function add(){
//      return ;
// }
// Es6
/*
const add() => {
    return;
}
*/

// write a multiplicate table of 3 using function and loop

const num = Number(prompt("Enter the number you want the multiplicating of"));

const mult = (num) => {
  return num * i;
};
let i = 1;
while (i <= 10) {
  console.log(mult(num));
  i++;
}
