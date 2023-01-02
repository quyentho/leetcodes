function anagram(str1, str2) {
  if (str1 === str2) return true;

  // 2 frequency counter object
  const frequency1 = {};
  const frequency2 = {};

  // 2 loops
  for (const char of str1) {
    frequency1[char] = ++frequency1[char] || 1;
  }

  for (const char of str2) {
    frequency2[char] = ++frequency2[char] || 1;
  }

  // loops through obj1 check
  for (const key in frequency1) {
    // if key not exists in obj2 => false
    if (!(key in frequency2)) return false;
    // if counter not equal => false
    if (frequency1[key] !== frequency2[key]) return false;
  }

  // need to loop through obj2 also to avoid cases such that: str1 is substring of str2
  for (const key in frequency2) {
    // if key not exists in obj1 => false
    if (!(key in frequency1)) return false;
    // if counter not equal => false
    if (frequency1[key] !== frequency2[key]) return false;
  }

  return true;
}

console.log(anagram("", ""));
console.log(anagram("aaz", "zaa"));
console.log(anagram("aaz", "baaz"));
console.log(anagram("aaz", "baz"));
console.log(anagram("anagram", "nagaram"));
