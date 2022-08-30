# Shortest Palindrome

[1]: https://leetcode.com/problems/shortest-palindrome/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

You are given a string s. You can convert s to a palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: s = 'aacecaaa'
Output: 'aaacecaaa'
```

&nbsp;

## Pseudo Code:

- There are two conditions we need to check for in this problem:
  1. input string is already a palindrome, in which case we return input string
  2. input string is not a palindrome, in which case we need to do some more logic
- First, we duplicate the input string, reverse it, and concatenate the original input, this makes a palindrome
- To see if we can make a shorter one, we will begin popping off elements from the reversed input string, and then checking if that is still a palindrome.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var shortestPalindrome = function (s) {
  s = s.split('')

  if (isPalindrome(s)) return s.join('')

  if (s.length > 1) {
    let rev = s.slice().reverse()
    let shortest = rev.concat(s)
    let prefix = rev.slice()
    for (let i = 0; i < rev.length; i++) {
      let newAttempt = prefix.concat(s)
      let newRev = newAttempt.slice().reverse()
      if (newAttempt.join('') === newRev.join('')) {
        shortest = newAttempt
      }
      prefix.pop()
    }
    return shortest.join('')
  }
  return s.join('')
}

var isPalindrome = (s) => {
  let rev = s.slice().reverse().join('')
  if (s.join('') === rev) return true
  return false
}
```

&nbsp;

### Tags:

#LeetCode #javascript
