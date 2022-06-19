# Palindrome Number


[1]: https://leetcode.com/problems/palindrome-number/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

```

&nbsp;

## Note:
- -231 <= x <= 231 - 1

&nbsp;


## **Solution:**

<!-- code below -->

```javascript

var isPalindrome = function(x){
  x = x.toString()
  let reversed = x.split('').reverse().join('')
  return x === reversed 
}

```

&nbsp;

### Tags:
#leetCode #javascript