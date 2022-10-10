# Shuffle Array

[1]: https://leetcode.com/problems/shuffle-the-array/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var shuffle = function (nums, n) {
  if (nums.length <= 1) return nums
  const firstHalf = nums.slice(0, n)
  const secondHalf = nums.slice(n, n.length)
  const output = []
  for (let i = 0; i < n; i++) {
    output.push(firstHalf[i])
    output.push(secondHalf[i])
  }
  return output
}
```
