function pascalsTriangle(n) {
  for (let line = 1; line <= n; line++) {
    let row = "";
    let C = 1;
    for (let i = 1; i <= line; i++) {
      row += C + " ";
      C = (C * (line - i)) / i;
    }
    console.log(" ".repeat(n - line) + row);
  }
}
pascalsTriangle(5);
