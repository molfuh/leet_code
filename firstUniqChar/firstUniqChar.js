// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.


// Note: You may assume the string contains only lowercase English letters.

var firstUniqChar = function(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (obj[letter] === undefined) {
      obj[letter] = i;
    } else {
      delete obj[letter];
    }
  }
  return Math.min(...Object.values(obj));
};

// (() => {

//   var s = "leetcode"
//   console.log(firstUniqChar(s));
//   // return 0.

//   var s = "loveleetcode"
//   console.log(firstUniqChar(s));
//   // return 2.
// })();