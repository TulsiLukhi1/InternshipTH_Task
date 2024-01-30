const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));



// var addTwoPromises = async function (promise1, promise2) {
//     var sum = 0;
//     await Promise.all([promise1, promise2]).then((result) => {
//       console.log(result);
//       result.forEach((num) => {
//         sum += num;
//       });
//     });
//     return sum;
// };

// addTwoPromises(promise1, promise2).then((sum)=>{
//   console.log("result is ",sum)
// });




//*******************improved and cleaner code******************************//


var addTwoPromise = async (promise1,promise2)=>{
  const [num1,num2] = await Promise.all([promise1,promise2]);
  const sum = num1+num2;
  return sum;
}

addTwoPromise(promise1,promise2).then((sum)=>{
  console.log("Result is ",sum)
});