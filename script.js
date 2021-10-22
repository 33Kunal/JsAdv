const dolphinsScore = 96 + 108 + 89;
const koalasScore = 88 + 91 + 110;
const avgdolphins = dolphinsScore / 2;
const avgkoalas = koalasScore / 3;
console.log(avgdolphins);
console.log(avgkoalas);
if (avgdolphins > avgkoalas) {
  console.log(`dolphins are winner`);
} else {
  console.log(`avgkoalas are winner`);
}

// 17 oct -- template string

const marksHeight = 1.69;
const marksWeight = 78;
const johnsWeight = 95;
const johnsHeight = 1.88;

const BMImark = marksWeight / marksHeight ** 2;
const BMIjohn = johnsWeight / johnsHeight ** 2;

console.log(BMImark);
console.log(BMIjohn);

if (BMIjohn > BMImar) {
  console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`);
} else {
  console.log(
    ` "Mark's BMI (${BMImark}) is higher than John's (${BMIjohn}) !"`
  );
}
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//21 oct
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator Precedence and bit overloading
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
