// Given a string s, return the longest palindromic substring in s.
var longestPalindrome = function(s) {
      let max = 0;
  let maxStart = 0;
  let maxEnd = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > max) {
      max = right - left - 1;
      maxStart = left + 1;
      maxEnd = right - 1;
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > max) {
      max = right - left - 1;
      maxStart = left + 1;
      maxEnd = right - 1;
    }
  }
  return s.slice(maxStart, maxEnd + 1);
    
};