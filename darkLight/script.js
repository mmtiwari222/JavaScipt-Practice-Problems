const body = document.getElementById("body");
const theme = document.getElementById("theme");
const first = document.getElementsByClassName("first");

function themeColor() {
  if (theme.value == "dark") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    first[0].style.backgroundColor = "black";
    first[0].style.color = "white";
    first[1].style.backgroundColor = "black";
    first[1].style.color = "white";
    first[2].style.backgroundColor = "black";
    first[2].style.color = "white";
    first[3].style.backgroundColor = "black";
    first[3].style.color = "white";
    first[4].style.backgroundColor = "black";
    first[4].style.color = "white";
    first[5].style.backgroundColor = "black";
    first[5].style.color = "white";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    first[0].style.backgroundColor = "white";
    first[0].style.color = "black";
    first[1].style.backgroundColor = "white";
    first[1].style.color = "black";
    first[2].style.backgroundColor = "white";
    first[2].style.color = "black";
    first[3].style.backgroundColor = "white";
    first[3].style.color = "black";
    first[4].style.backgroundColor = "white";
    first[4].style.color = "black";
    first[5].style.backgroundColor = "white";
    first[5].style.color = "black";
  }
}

theme.onchange = themeColor;
