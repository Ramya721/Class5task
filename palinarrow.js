const strings = ["racecar", "hello", "madam", "world", "level"];

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
};

const getPalindromes = (arr) => arr.filter((str) => isPalindrome(str));

const palindromeStrings = getPalindromes(strings);
console.log(palindromeStrings);
