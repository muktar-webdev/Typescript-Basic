"use strict";
const names = "Nishat Hasan Muktar";
let age = 20;
const isDeveloper = true;
const fullInfo = `${names}
${age}
${isDeveloper}`;
console.log(fullInfo);
// --function--//
function add(num1, num2) {
    return num1 + num2;
}
const result = add(20, 20);
console.log(result);
// --function --//
function getName(firstName, lastName) {
    return firstName + lastName;
}
const fullName = getName("Nishat", "Hasan");
console.log(fullName);
// --void--//
function doubleIt(num) {
    const result = num * 2;
    // return result;
}
// --arrow function --//
let multiple2;
multiple2 = (x, y) => x * y;
let multiple = (x, y) => x * y;
console.log(multiple(20, 10));
let multiple3;
multiple3 = (i, z) => {
    return i * z;
};
