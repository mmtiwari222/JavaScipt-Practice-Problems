function diamond(n) {
  // Upper part
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(row);
  }
  // Lower part
  for (let i = n - 1; i >= 1; i--) {
    let row = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(row);
  }
}
diamond(5);
