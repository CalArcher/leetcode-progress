# Valid Palindrome

[1]: https://leetcode.com/problems/valid-palindrome/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var isPalindrome = function (s) {
  let palindromed = removeSpacesAndCommas(s)
  let reversed = palindromed.split('').reverse().join('')
  return palindromed === reversed
}

var removeSpacesAndCommas = (s) => {
  let arr = s.toLowerCase().split('')
  let temp = []
  for (let i = 0; i < s.length; i++) {
    let n = arr[i].charCodeAt(0)

    //wanted to solve without regex
    if ((n >= 48 && n <= 57) || (n >= 97 && n <= 122)) {
      temp.push(arr[i])
    }
  }
  return temp.join('')
}
```

&nbsp;

### Tags:

#LeetCode #javascript
