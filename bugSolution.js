function foo(a, b) {
  // Handle null or undefined inputs by defaulting to 0
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;
  
  // Check if both a and b are numbers before addition
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Invalid input type';
  }
  return a + b;
}

console.log(foo(1, null)); // Output: 1
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo('1',2)); // Output: Error: Invalid input type