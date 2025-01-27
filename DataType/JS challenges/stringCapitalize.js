// developer => Developer

const myString = "developer";

// Method 1
console.log(myString.charAt(0).toUpperCase() + myString.slice(1));

// Method 2
console.log(myString[0].toUpperCase() + myString.slice(1));

// Method 3
console.log(myString.charAt(0).toUpperCase() + myString.substring(1));

// Method 4
console.log(`${myString[0].toUpperCase()}${myString.slice(1)}`);

// Method 5
console.log(myString.replace(myString[0], myString[0].toUpperCase()));

// Method 6
console.log(
  myString.replace(myString.charAt(0), myString.charAt(0).toUpperCase())
);

// Method 7
console.log(myString.charAt(0).toUpperCase().concat(myString.slice(1)));
