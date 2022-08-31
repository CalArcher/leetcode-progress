# Rotate Array.

[1]: https://leetcode.com/problems/rotate-array/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an array, rotate the array to the right by k steps, where k is non-negative.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

```

&nbsp;

## Pseudo Code:

- return if nums length === 1, as no matter how many times you shift a length 1 array, it will remain the same

- its repetitive to shift an array more than one complete rotation, and wastes time, so we get the remainder of k / nums.length IF k > nums.length

- we splice off k elements from nums

- instead of using concat, as that can't be done in place, we spread out the pop array and unshift the while thing on nums

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var rotate = function (nums, k) {
  if (nums.length === 1) return nums
  k = nums.length <= k ? k % nums.length : k
  let pop = nums.splice(nums.length - k)
  nums.unshift(...pop)
  return nums
}
```

&nbsp;

### Tags:

#LeetCode #javascript
