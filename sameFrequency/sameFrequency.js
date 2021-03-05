function sameFrequency(num1, num2){
    let obj = {};
    num1 = num1.toString().split('');
    num2 = num2.toString().split('');
    for (let int1 of num1) {
      if (obj[int1]) {
        obj[int1]++;
      } else {
        obj[int1] = 1;
      }
    }

    for (let int2 of num2) {
      if (obj[int2]) {
          if (obj[int2] > 1) {
            obj[int2]--;
          } else {
            delete obj[int2];
          }
      } else {
        return false;
      }
    }
    if (Object.keys(obj).length > 0) {
      return false;
    } 
    return true;
  }

  //I: two pos ints
  //O: return bool - if two nums have same FREQ of digits
  //C:O(N)
  //E:
  (() => {
    console.log(sameFrequency(182,281)); // true
    console.log(sameFrequency(14,34));  //false
    console.log(sameFrequency(3589578,5879385)); //true
    console.log(sameFrequency(22,222)); //false
  })();