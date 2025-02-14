const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// 1 method
const arr3 = arr1.slice(0, 4);
console.log(arr3.concat(arr2));

// 2 method
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);
