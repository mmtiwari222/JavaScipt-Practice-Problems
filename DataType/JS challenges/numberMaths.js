const x = Math.floor(Math.random() * 100) + 1;
const y = Math.floor(Math.random() * 50) + 1;

// sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput); // sumOutput 20 + 10 = 30 (example)

// difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput); // differenceOutput 20 - 10 = 10 (example)

// product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput); // productOutput 20 * 10 = 200 (example)

// quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput); // quotientOutput 20 / 10 = 2 (example)

// remainder
const remainder = x % y;
const remainderOutput = `${x} % ${y} = ${remainder}`;
console.log(remainderOutput); // remainderOutput 20 % 10 = 0 (example)
