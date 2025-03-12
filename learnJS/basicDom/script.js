// catch HTML element by id
// Description: This method returns the element that has the ID attribute with the specified value.
// Usage: Use this method when you need to select a single element with a unique ID. IDs should be unique within a document.
const js = document.getElementById("JS");
// js.innerText = "Hello World!";
// Description: The innerText property sets or returns the text content of the specified element. It represents the "rendered" text content of a node and its descendants.
// Usage: Use innerText when you want to change or retrieve the text content of an element, excluding any HTML tags.

// catch HTML Element by class
// Description: This method returns a live HTMLCollection of all elements with the specified class name.
// Usage: Use this method when you need to select multiple elements that share the same class name. Note that it returns a live collection, which means it updates automatically when the document changes.
const first = document.getElementsByClassName("first");
first[1].innerText = "Catch HTML element by className";

// catch using query selector
// Description: This method returns the first element within the document that matches the specified CSS selector.
// Usage: Use this method when you need to select a single element using a CSS selector. It is more flexible than getElementById because it can select elements by class, attribute, or any other valid CSS selector.

// const second = document.querySelector(".second")
// second.innerText = "Catch using query selector"

const second = document.querySelectorAll(".second");
second[1].innerText = "Hello World!";
second[0].innerHTML = "<button>Click</button>";
// Description: The innerHTML property sets or returns the HTML content (including HTML tags) of the specified element.
// Usage: Use innerHTML when you want to change or retrieve the HTML content of an element, including any nested HTML tags.
second[0].style.backgroundColor = "yellow";
second[1].style.color = "yellow";
// Description: The .style property is used to get or set the inline style of an element. It allows you to modify the CSS properties directly on the element.
// Usage: Use .style when you want to change the CSS styles of an element dynamically through JavaScript. Each CSS property is accessed as a camelCase property of the .style object (e.g., backgroundColor for background-color).

// getElementById: When you need to select a single, unique element by its ID.
// getElementsByClassName: When you need to select multiple elements by their class name.
// querySelector: When you need to select a single element using a more complex CSS selector.
// querySelectorAll: When you need to select multiple elements using a more complex CSS selector.
