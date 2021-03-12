function isSubsequence(str1, str2) {
  let first = 0;
  let second = 0;
  while (second <= str2.length) {
    if (first >= str1.length) {
      return true;
    }
    if (str1[first] === str2[second]) {
      first++;
      second++;
    } else {
      second++;
    }
  }
  return false;
}

//I: two strings
//O: bool - whether chars in first are subsequence of chars in second
  //checks whether chars from first appear in second in the SAME order
//C: time - O(N + M); space - O(1)

//examples:
(() => {
  console.log(isSubsequence('pan', 'pancake')); // true
  console.log(isSubsequence('cap', 'pancake')); // false - order matters
  console.log(isSubsequence('a', 'pancake')); // true
  //edge case - there can be letters in between
  console.log(isSubsequence('pake', 'pancake')); // true
})();

//make two pointers
//one is first elem of one string, other is first of second
//while second pointer is less than length of string
  //if equal, increment both
  //if NOT equal, only increment second pointer
  //if first pointer > length of first string
    //return true
//return false
