functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 5000)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 15000)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 10000)),
];

const promiseAll = (functions) => {
  return new Promise((resolve, reject) => {
    var resolved_arr = [];
    var count = 0;

    const checkCount = () => {
      if (count === functions.length) {
        resolve(resolved_arr);
      }
    };

    

    functions.forEach(async (fn, i) => {
      try {
        const value = await fn();
        resolved_arr[i] = value;
        count++;
        checkCount();
      } catch (error) {
        reject(error);
      }
    });
  });
};

promiseAll(functions).then((arr) => {
  console.log(arr);
});
