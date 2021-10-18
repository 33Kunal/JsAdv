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
