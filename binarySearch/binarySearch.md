# Binary Search

[1]: https://leetcode.com/problems/binary-search/submissions/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let pointer = Math.floor((l + r) / 2)
    if (nums[pointer] === target) return pointer
    if (nums[pointer] > target) {
      r = pointer - 1
    } else if (nums[pointer] < target) {
      l = pointer + 1
    }
  }
  return -1
}
```

&nbsp;

### Tags:

#LeetCode #javascript
