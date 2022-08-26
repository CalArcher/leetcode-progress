# Roman to Integer

[1]: https://leetcode.com/problems/roman-to-integer/submissions/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

```

&nbsp;

## Pseudo Code:

- First, make a map of all roman numerals and their values
- Iterate through the array, and determine if the current value is greater or smaller than the next element in the array
- If greater, add the roman numeral's mapped value to the sum
- If smaller, subtract the roman numeral's mapped value from the sum

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var romanToInt = function (s) {
  s = s.split('')
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = values[s[s.length - 1]]
  for (let i = 0; i < s.length - 1; i++) {
    if (values[s[i]] >= values[s[i + 1]]) {
      sum += values[s[i]]
    } else {
      sum -= values[s[i]]
    }
  }
  return sum
}
```

&nbsp;

### Tags:

#LeetCode #javascript
