# JavaScript Type Error: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: attempting to access the 'length' property of a value that is not an object (specifically, undefined and a number). The code illustrates the error and provides a solution for handling unexpected input types.

## Bug Description
The `foo` function incorrectly assumes its input will always have a `length` property. This leads to a `TypeError` when called with `undefined` or a number as an argument.

## Bug Solution
The solution involves adding explicit type checking to handle cases where the input is not an object with a length property.  The updated code gracefully handles null and undefined values and throws an error for other unexpected input types, ensuring more robust error handling.

## How to Run
1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run the JavaScript files in your preferred environment (e.g., Node.js, browser console).