# Maximum Ascending Subarray Sum

[1]: https://leetcode.com/problems/maximum-ascending-subarray-sum/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var maxAscendingSum = function (nums) {
  let max = 0
  let current = 0
  let last = nums[0]
  for (let i in nums) {
    if (nums[i] <= last) {
      current = 0
    }
    current += nums[i]
    if (current > max) {
      max = current
    }
    last = nums[i]
  }
  return max
}
```
