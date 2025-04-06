// ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
const person = {
  name: "Madan",
  age: 22,
  isStudent: "true",
  favoriteProgrammingLanguage: "JavaScript",
};
// ✅ Task 2: Print the values to the console.
console.log(person);
// ✅ Task 3: Try reassigning values to let and const variables and observe errors.
// we can't reassign values in const variable but in let we can
// ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
const user = {
  userName: "mmtiwari",
  userid: 3,
  isAdmin: "true",
};

const fruits = ["apple", "banana", "orange", "grape"];

user.userName = "MMTiwari";
fruits[3] = "watermelon";

console.log(user);
console.log(fruits);
