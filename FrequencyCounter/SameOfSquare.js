// provided 2 arrays, check if all values in array 1 occur in a square form in array 2.
// eg: A = [1,2,3], B = [9,4,1] ==> true
// The order does not matter but the frequency does:
// eg: A = [1,2,1], B = [1,4] ==> false because "1" occur 2 times. The correct array
// should be [1,4,1]

// O(n)
function same(arr1, arr2) {
  // declare two frequency count object

  const frequency1 = {};
  const frequency2 = {};
  // use 2 loops to iterate over 2 arrays and count the frequency.
  // object key is: value of array, value is the frequency

  for (const value of arr1) {
    frequency1[value] = ++frequency1[value] || 1;
  }

  for (const value of arr2) {
    frequency2[value] = ++frequency2[value] || 1;
  }

  // use 1 loop to check in first frequency array. If:
  for (const key in frequency1) {
    // ! (key * key exists in frequency object2)
    // return false
    if (!frequency2[key * key]) return false;

    // ! (value of key in object 1  == value of key*key in object 2)
    // return false
    if (frequency1[key] !== frequency2[key * key]) return false;
  }

  // after all return true.
  return true;
}

console.log(same([1, 4, 1], [1, 16, 1]));
console.log(same([1, 4, 1], [16, 1]));
console.log(same([5, 4, 5], [16, 25, 25]));
