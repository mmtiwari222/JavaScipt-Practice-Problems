let n = 5; // Number of rows

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += " "; // Adding leading spaces
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    row += "*"; // Adding stars
  }
  console.log(row);
}
