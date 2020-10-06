// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const charCode = str.charCodeAt(i);
    if ((charCode + 1) != str.charCodeAt(i + 1)) {
      let retString = String.fromCharCode(charCode + 1);
      return retString;
    }
  }
  return 'no missing letters'
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {

  for (let i = 0; i < arr.length; i++) {
    const firstNumber = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const secNumber = arr[j];
      if (firstNumber + secNumber == target) {
        // let retString = true '(because ' + firstNumber + '+' + secNumber + ')';
        return true
      }
    }
  }
  return false
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {}