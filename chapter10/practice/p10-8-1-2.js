// 10.8.1.2. The isPalindrome Function

function reverse(str) {
    return str.split('').reverse().join('');
  }
  
  function isPalindrome(str) {
    return reverse(str) === str;
  }
  
  console.log(isPalindrome("tacocat"));
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("banana"));