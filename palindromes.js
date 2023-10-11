(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    var palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
})(["racecar", "hello", "deed"]);
