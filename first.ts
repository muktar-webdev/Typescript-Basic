const names: string = "Nishat Hasan Muktar";
let age: number = 20;
const isDeveloper: boolean = true;

const fullInfo = `${names}
${age}
${isDeveloper}`;
console.log(fullInfo);

// --function--//
function add(num1: number, num2: number) {
  return num1 + num2;
}
const result: number = add(20, 20);
console.log(result);

// --function --//
function getName(firstName: string, lastName: string) {
  return firstName + lastName;
}

const fullName = getName("Nishat", "Hasan");
console.log(fullName);

// --void--//
function doubleIt(num: number) {
  const result = num * 2;
  // return result;
}

// --arrow function --//

let multiple2: (x: number, y: number) => number;
multiple2 = (x, y) => x * y;

let multiple = (x: number, y: number): number => x * y;
console.log(multiple(20, 10));

let multiple3: (i: number, z: number) => number;
multiple3 = (i, z) => {
  return i * z;
};
