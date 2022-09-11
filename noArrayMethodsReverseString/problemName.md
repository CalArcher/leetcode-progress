# Reverse String

[1]: https://leetcode.com/problems/reverse-string/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: s = ['h', 'e', 'l', 'l', 'o']
Output: ['o', 'l', 'l', 'e', 'h']
```

&nbsp;

## Note:

- I decided to make this more challenging by not just using the obvious array.reverse() and use a two pointers method to solve this problem.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var reverseString = function (s) {
  if (s.length === 1 || s.length === 0) return s

  let r = s.length - 1
  let l = 0

  while (r > l) {
    let tempRight = s[r]
    let tempLeft = s[l]
    s[r] = tempLeft
    s[l] = tempRight
    r--
    l++
  }
  return s
}
```

&nbsp;

### Tags:

#LeetCode #javascript
