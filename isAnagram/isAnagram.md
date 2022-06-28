# Valid Anagram


[1]: https://leetcode.com/problems/valid-anagram/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: s = "anagram", t = "nagaram"
Output: true

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var isAnagram = function(s,t){
  if(s.length != t.length) return false
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  return s === t
}

```

&nbsp;

### Tags:
#leetCode #javascript