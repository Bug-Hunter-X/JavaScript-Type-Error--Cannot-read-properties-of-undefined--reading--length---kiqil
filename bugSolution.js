function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  if (typeof x !== 'object' || x.length === undefined) {
    throw new Error('Invalid input: x must be an object with a length property');
  }
  return x.length; 
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0
//console.log(foo(5)); // Throws an error: Error: Invalid input: x must be an object with a length property
console.log(foo('abc')); //Throws an error: Error: Invalid input: x must be an object with a length property