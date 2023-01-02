// given a sorted array. Find a pairs of numbers in the array so that:
// Sum of them equal zero
// eg: [-3,-2,0,1,3] => return [-3,3]
// eg: [-3,-2,0,1] => return undefined

function sumToZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

console.log(sumToZero([-3, -2, 0, 1, 3]));
console.log(sumToZero([-3, -2, 0, 1]));
console.log(sumToZero([-3, -2, 0, 2, 4]));
console.log(sumToZero([0, 0, 0, 1]));
