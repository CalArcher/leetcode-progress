# Strictly Palindromic Number

[1]: https://leetcode.com/problems/strictly-palindromic-number/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

Given an integer n, return true if n is strictly palindromic and false otherwise.

A string is palindromic if it reads the same forward and backward.


&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: n = 9
Output: false
Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var isStrictlyPalindromic = function(n) {
  const endCond = n - 2 >= 36 ? 34 : n - 2
  for(let i=2; i <= endCond; i++){
      const isPal = isPalindrome(n.toString(i))
      if(isPal === false){
          return false
      }
  }
  return true
}

function isPalindrome(str){
  const rev = [...str].reverse().join('')
  return rev === str ? true : false
} 

```
