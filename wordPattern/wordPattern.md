# Word Pattern

[1]: https://leetcode.com/problems/word-pattern/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: (pattern = 'abba'), (s = 'dog cat cat dog')
Output: true
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var wordPattern = function (pattern, s) {
  pattern = pattern.split('')
  s = s.split(' ')
  if (pattern.length !== s.length) return false
  let patternMap = new Map()
  let wordMap = new Map()

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.has(pattern[i]) || wordMap.has(s[i])) {
      if (wordMap.has(s[i]) && wordMap.get(s[i]) !== pattern[i]) {
        return false
      } else if (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== s[i]) {
        return false
      }
    } else {
      patternMap.set(pattern[i], s[i])
      wordMap.set(s[i], pattern[i])
    }
  }
  return true
}
```
