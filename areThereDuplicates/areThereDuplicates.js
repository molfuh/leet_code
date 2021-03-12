// function areThereDuplicates(...args) {
//   let obj = {};
//   for (let arg of args) {
//     if (obj[arg]) {
//       return true;
//     } else {
//       obj[arg] = 1;
//     }
//   }
//   return false;
// }

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  // let end = args.length - 1;
  let next = 1;
  // while (start < end) {
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// function areThereDuplicates() {

//   console.log(arguments[0])
//   return new Set(arguments).size !== arguments.length;
// }

//I: variable num of args
//O: boolean - any repeated
//C: O(n) time and O(n) space
  //bonus: O(n log n) time and O(1) space
//E:

(() => {
  console.log(areThereDuplicates(1, 2, 3)) //false
                                //  s
  console.log(areThereDuplicates(1, 2, 2)) //true
  //  e
  console.log(areThereDuplicates(1, 2, 2, 3, 3)) //true
  console.log(areThereDuplicates('a', 'b', 'c', 'a')) //true
})();