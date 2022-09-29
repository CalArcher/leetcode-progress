# Longest Common Prefix

[1]: https://leetcode.com/problems/longest-common-prefix/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: strs = ['flower', 'flow', 'flight']
Output: 'fl'
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var longestCommonPrefix = function (strs) {
  if (strs.length <= 1) return strs[0]

  let longestPre = strs[0].split('')
  let longestPoss = strs[0].split('')

  for (let i = 1; i < strs.length; i++) {
    let pre = []
    let current = strs[i]

    for (let j in current) {
      if (current[j] === longestPoss[j]) {
        pre.push(current[j])
      } else {
        break
      }
    }
    if (pre.length < longestPre.length) {
      longestPre = pre.slice(0)
    }
  }
  if (longestPre.length < 1) return ''
  return longestPre.join('')
}
```

&nbsp;

### Tags:

#leetCode #javascript
