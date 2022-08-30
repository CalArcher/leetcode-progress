# Is Subsequence

[1]: https://leetcode.com/problems/is-subsequence/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: (s = 'abc'), (t = 'ahbgdc')
Output: true
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var isSubsequence = function (s, t) {
  let build = []
  let j = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      build.push(t[i])
      j++
      if (build.join('') === s) {
        return true
      }
    }
  }
  if (build.join('') === s) {
    return true
  }
  return false
}
```

&nbsp;

### Tags:

#LeetCode #javascript
