

var validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  let obj2 = {};
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

(() => {
  console.log(validAnagram('', '')); //true
  console.log(validAnagram('aaz', 'zza')); //false
  console.log(validAnagram('nagaram', 'anagram')); //true
  console.log(validAnagram('car', 'rat')); //false
})();


// O(n) time