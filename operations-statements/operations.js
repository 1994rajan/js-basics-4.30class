/*
logical Operations

-AND(&&)
-OR(||)
-NOT(!)


*/

let number;
console.log(number);

const num1 = prompt("enter firts number ");
const num2 = prompt("enter second number ");

if (num1 > num2) {
  alert(num1 + "is greater than" + num2);
} else {
  alert(num2 + "is greater than" + num1);
}

if (num1 && num2) {
  alert("both are present");
}

if (!num1) {
  alert(num2);
}

alert("thank you");
