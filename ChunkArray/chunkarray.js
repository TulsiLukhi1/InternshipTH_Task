var chunk = function (arr, size) {
  let start = 0;
  let ans = [];

  if (size === 0) {
    return arr;
  }
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    const sliceEndIndex = start + size > arr.length ? arr.length : size + start;

    ans = [...ans, arr.slice(start, sliceEndIndex)];

    start += size;
  }
  return ans;
};

const test = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const size = 2;
  const chunkArray = chunk(arr, size);
  console.log("result", chunkArray);
};

test();
