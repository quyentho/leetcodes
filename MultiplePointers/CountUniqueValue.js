// given a sorted array. count the number of unique value in the array.
// eg: [1,1,1,1,2] => 2
// eg: [1,2,2,3,3] => 3
// eg: [] => 0
// eg: [1,1,1,1] => 1
// eg: [1,2,3,4,4,5,5,6] => 6
function countUniqueValue(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  let j = 1;
  let count = 0;
  while (j <= arr.length) {
    if (arr[j] !== arr[i]) {
      ++count;
      i = j;
    }
    j++;
  }

  return count || 1;
}

console.log(countUniqueValue([]));

console.log(countUniqueValue([1, 1, 1, 1, 2]));
console.log(countUniqueValue([1, 2, 2, 3, 3]));
console.log(countUniqueValue([1, 1, 1, 1]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 5, 5, 6]));
