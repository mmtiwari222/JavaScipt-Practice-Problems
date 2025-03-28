let n = 4; // Define the size of the square

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += j; // Append numbers in sequence
  }
  console.log(row); // Print each row
}
