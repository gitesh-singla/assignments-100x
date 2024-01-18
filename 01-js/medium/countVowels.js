/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase().split('');
    let ans=0;
    str.forEach(ch => {
      if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        ans++;
    });
    return ans;
}

module.exports = countVowels;