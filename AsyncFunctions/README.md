# Function Composition Task

## Task Definition

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

### Example 3:

**Input**: functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
**Output**: {"t": 150, "resolved": [4, 10, 16]}
**Explanation**: All the promises resolved with a value. The returned promise resolved when the last promise resolved.


## Project Structure

This project contains the following files related to the task:

- `asyncfunctions.js`: JavaScript file containing the implementation of the function composition.


## How to Run

To test the function composition, follow these steps:

1. Clone the repository.
2. Open a terminal and navigate to the project directory.
3. Run the command: `node asyncfunctions.js`

This will execute the one test case and display the results.

