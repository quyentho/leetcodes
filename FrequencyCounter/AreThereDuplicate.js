// use frequency counter
function areThereDuplicates(...params) {
  const dict = {};
  for (const value of params) {
    if (dict[value]) {
      return true;
    } else {
      dict[value] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
