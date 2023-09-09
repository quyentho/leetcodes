function flatten(arrayOfArrays) {
  const newArr = [];

  function helper(value) {
    if (typeof value === "number") {
      newArr.push(value);
      return;
    }
    while (value.length > 0) {
      helper(value.shift());
    }
  }
  for (const arr of arrayOfArrays) {
    helper(arr);
  }
  return newArr;
}
console.log(flatten([[1], [4, 5]])); // [1, 4, 5]
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
