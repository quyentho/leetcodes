// Given an array of integers of size ‘n’,
// Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

// Input  : arr[] = {2, 3}, k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole array is 2.

var SlidingWindowApproach = (array, k) => {
  let sum = array[0];
  // calculate initial frame sum
  for (let index = 1; index < k; index++) {
    sum += array[index];
  }

  let max = sum;

  let windowStart = 0;
  let windowEnd = k - 1;
  while (windowEnd < array.length - 1) {
    windowStart++;
    windowEnd++;

    sum = sum + array[windowEnd] - array[windowStart - 1];

    max = Math.max(sum, max);
  }
  return max;
};

console.log(SlidingWindowApproach([100, 200, 300, 400], 3));
