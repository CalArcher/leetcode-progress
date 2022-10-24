# Sort Integers by The Power Value

[1]: https://leetcode.com/problems/sort-integers-by-the-power-value/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:

if x is even then x = x / 2
if x is odd then x = 3 \* x + 1
For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.

Return the kth integer in the range [lo, hi] sorted by the power value.

Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in a 32-bit signed integer.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: lo = 12, hi = 15, k = 2
Output: 13
Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
The power of 13 is 9
The power of 14 is 17
The power of 15 is 17
The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var getKth = function (lo, hi, k) {
  let powerMap = new Map()

  for (let i = lo; i <= hi; i++) {
    let temp = i
    let stepsCount = 0
    while (temp > 1) {
      if (temp % 2 === 0) {
        temp = temp / 2
      } else {
        temp = temp * 3 + 1
      }
      stepsCount++
    }
    powerMap.set(i, stepsCount)
  }

  let mappedArr = Array.from(powerMap.entries()).sort((a, b) => a[1] - b[1])
  let output = mappedArr[k - 1][0]

  for (let i = k - 1; i < mappedArr.length - 1; i++) {
    const next = i + 1
    if (mappedArr[i][1] === mappedArr[next][1]) {
      output = mappedArr[next][0]
    } else {
      return output
    }
  }

  return output
}
```
