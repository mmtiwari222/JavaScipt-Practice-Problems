const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const ans = document.getElementById("ans");

function addNum() {
  let result = parseInt(num1.value) + parseInt(num2.value);
  ans.innerText = result;
}
function subNum() {
  let result = parseInt(num1.value) - parseInt(num2.value);
  ans.innerText = result;
}
function mulNum() {
  let result = parseInt(num1.value) * parseInt(num2.value);
  ans.innerText = result;
}
function divNum() {
  let result = parseInt(num1.value) / parseInt(num2.value);
  ans.innerText = result;
}
