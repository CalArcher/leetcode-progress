# Pascal's Triangle

[1]: https://leetcode.com/problems/pascals-triangle/submissions/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: numRows = 5
Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var generate = function (n) {
  let output = [[1]]
  let count = 1
  let current = [1]
  while (count < n) {
    let next = [1]
    for (let i = 1; i < current.length; i++) {
      const newEl = current[i] + current[i - 1]
      next.push(newEl)
    }
    next.push(1)
    current = next
    output.push(current)
    count++
  }
  return output
}
```
