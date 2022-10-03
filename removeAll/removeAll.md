# Remove All Occurrences of a Substring

[1]: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var removeOccurrences = function (s, part) {
  while (true) {
    if (s.indexOf(part) != -1) {
      let start = s.indexOf(part)
      s = s.split('')
      s.splice(start, part.length)
      s = s.join('')
    } else {
      return s
    }
  }
  return s
}
```
