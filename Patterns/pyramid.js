let rows = 5; // Number of rows

for (let i = 1; i <= rows; i++) {
  let str = "";

  // Print spaces
  for (let j = 1; j <= rows - i; j++) {
    str += " ";
  }

  // Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }

  console.log(str);
}
