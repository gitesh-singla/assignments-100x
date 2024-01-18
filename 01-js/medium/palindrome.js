/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().split(' ').join('').replace(/[^a-zA-Z0-9]/g, '');
  let strRev = "";
  const n = str.length;
  for(let i=0; i<n; i++){
    strRev += str[n-i-1];
    }

  return strRev == str;
}

module.exports = isPalindrome;
