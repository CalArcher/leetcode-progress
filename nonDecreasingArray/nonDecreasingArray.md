# Non-decreasing Array

[1]: https://leetcode.com/problems/non-decreasing-array/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var checkPossibility = function (nums) {
  let valid = 0
  if (nums[0] > nums[1]) {
    nums[0] = nums[1]
    valid++
  }
  let prev = nums[0]
  let next = nums[2]

  for (let i = 1; i < nums.length; i++) {
    prev = nums[i - 1]
    next = nums[i + 1]

    if (next < nums[i]) {
      if (next < prev) {
        nums[i + 1] = nums[i]
        valid++
      } else {
        nums[i] = next
        valid++
      }

      if (nums[i] < prev) {
        return false
      }
    }
    if (valid > 1) return false
  }
  return true
}
```
