// if - else
// switch - case

//  a block of codes executing based on the condition then we use statements

// const gender = prompt("what is your gender? (m/f)");

// if (gender === "m") {
//   alert("you are male");
// } else {
//   alert("you are female");
// }
// const result =
//   gender === "m" ? console.log("you are male") : console.log("you are female");

// write ternary operator to check if a user can vote or not (above18)
const age = Number(prompt("what is your age ?"));

// ternary operator
const result = 
age =>  18 ? console.log("you can vote") : console.log("you can not vote");

/*
=  a=b(value)
==  value && value check
===  strictly type check value && value check && type check
*/

// switch - case

// const value = Number(prompt("enter a value"));

// switch (value) {
//   case 1:
//     console.log("1");
//     break;
//   default:
//     console.log("else");
// }

// const num1 = Number(prompt("enter first value"));
// const num2 = Number(prompt("enter second value"));

// // logic to check if the user has input charecter

// const isVaidnum1 =
//   (num1.charCodeAt() >= 65 && num1.charCodeAt() <= 90) ||
//   (num1.charCodeAt() >= 97 && num1.charCodeAt() <= 122);

// const isVaidnum2 =
//   (num2.charCodeAt() >= 65 && num2.charCodeAt() <= 90) ||
//   (num2.charCodeAt() >= 97 && num2.charCodeAt() <= 122);
