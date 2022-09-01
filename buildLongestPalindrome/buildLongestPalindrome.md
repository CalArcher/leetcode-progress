# Longest Palindrome

[1]: https://leetcode.com/problems/longest-palindrome/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var longestPalindrome = function (s) {
  s = s.split('')
  let letters = buildMap(s)
  let longest = 0
  let odd = 0
  for (let key in letters) {
    let current = letters[key]
    if (current % 2 != 0) {
      if (current > odd) {
        longest += odd === 0 ? odd : odd - 1
        odd = current
      } else {
        longest += current - 1
      }
    } else {
      longest += current
    }
  }
  return (longest += odd)
}

var buildMap = (s) => {
  let letters = {}
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]]) {
      letters[s[i]]++
    } else {
      letters[s[i]] = 1
    }
  }
  return letters
}
```

&nbsp;

### Tags:

#LeetCode #javascript
