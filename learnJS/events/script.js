const first = document.getElementById("first");

function changeColor() {
  first.style.backgroundColor = "yellow";
}

// first way to add event
// first.onclick = changeColor;

// second way to add event
// addEventListener("click", changeColor);

// third way to add event - using attribute in html element
