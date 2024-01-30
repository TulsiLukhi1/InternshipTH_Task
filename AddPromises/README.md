# Function Composition Task

## Task Definition

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise 

should resolve with the sum of the two numbers.


### Example 1:

**Input**: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
**Output**: 7
**Explanation**: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.


## Project Structure

This project contains the following files related to the task:

- `addpromises.js`: JavaScript file containing the implementation of the function composition.


## How to Run

To test the function composition, follow these steps:

1. Clone the repository.
2. Open a terminal and navigate to the project directory.
3. Run the command: `node addpromises.js`

This will execute the one test case and display the results.

