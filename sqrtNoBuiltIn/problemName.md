# Sqrt(x)

[1]: https://leetcode.com/problems/sqrtx/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

##### Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x \*\* 0.5.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

```

&nbsp;

## Pseudo Code:

- A simple way to find the square root of something is to continuously subtract each consecutive odd number, starting at 1, from the number in question.
- Keep a tally of how many times you have subtracted an even number from the number in question, and the tally is the square root of the number.
- This method only works for perfect squares, which is okay in this example as we truncate all decimals from the output.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var mySqrt = function (x) {
  let remainder = x
  let i = 1
  let count = 0

  while (remainder >= 0) {
    if (remainder === 0 || remainder < i) {
      return count
    }
    count += 1
    remainder -= i
    i += 2
  }
}
```

&nbsp;

### Tags:

#LeetCode #javascript
