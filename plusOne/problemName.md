# Plus One

[1]: https://leetcode.com/problems/plus-one/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var plusOne = function (digits) {
  let i = digits.length - 1
  while (true) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
        return digits
      }
    } else {
      digits[i] += 1
      return digits
    }
    i--
  }
}
```

&nbsp;

### Tags:

#LeetCode #javascript
