# Function Composition Task

## Task Definition


Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

### Example 1:

**Input:** arr = [1,2,3], fn = function plusone(n) { return n + 1; }

**Output:** [2,3,4]

**Explanation:**
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.



## Project Structure

This project contains the following files related to the task:

- `transformation.js`: JavaScript file containing the implementation of the function composition.


## How to Run

To test the function composition, follow these steps:

1. Clone the repository.
2. Open a terminal and navigate to the project directory.
3. Run the command: `node transformation.js`

This will execute the one test case and display the results.

