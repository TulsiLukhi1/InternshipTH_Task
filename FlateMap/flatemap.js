const flattenTheArray = (...arrays) => {
    return arrays.reduce(
      (accumulator, currentValue) =>
        Array.isArray(currentValue)
          ? accumulator.concat(flattenTheArray(...currentValue))
          : accumulator.concat(currentValue),
      []
    );
  };
  
  console.log(flattenTheArray(
    [1, 2, 3, [0, 2]],
    [4, 5, [11, 12, [30, 40, [80]]]],
    [9],
    [6, 7, 8, 9, 10, 11]
  ));
  