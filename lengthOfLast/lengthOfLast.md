# Length of Last Word

[1]: https://leetcode.com/problems/length-of-last-word/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var lengthOfLastWord = function (s) {
  s = s.toLowerCase().split(' ')
  for (let i = s.length - 1; i >= 0; i--) {
    let current = s[i]
    if (current.match(/[a-z]/i)) {
      return current.length
    }
  }
}
```

&nbsp;

### Tags:

#LeetCode #javascript
