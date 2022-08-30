# Isomorphic Strings

[1]: https://leetcode.com/problems/isomorphic-strings/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: (s = 'egg'), (t = 'add')
Output: true
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var isIsomorphic = function (s, t) {
  s = s.split('')
  t = t.split('')
  return validIsoCheck(s, t)
}

var validIsoCheck = (s1, s2) => {
  let s1Map = {}
  let s2Map = {}

  for (let i = 0; i < s1.length; i++) {
    let key1 = s1[i]
    let key2 = s2[i]

    if (s1Map[key1] && s1Map[key1] !== key2) return false
    else if (!s1Map[key1] && s2Map[key2]) return false

    if (!s1Map[key1]) {
      s1Map[key1] = key2
    }
    if (!s2Map[key2]) {
      s2Map[key2] = key2
    }
  }
  return true
}
```

&nbsp;

### Tags:

LeetCode #javascript
