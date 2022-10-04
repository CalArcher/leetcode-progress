# Contains Duplicate III

[1]: https://leetcode.com/problems/contains-duplicate-iii/submissions/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

```

&nbsp;

## Pseudo Code:

- Start by creating a left and right pointer
- We will iterate through the array, each time adding 1 to the right pointer
- When abs(right pointer - left pointer) is greater than the indexDiff, add 1 to the left pointer and reset the value of the left pointer to l + 1
- Each iteration, check if the abs(right value - left value) <= valueDiff, and if it is, we can return true
- If the value of the left pointer ever grows greater than the array length, add 1 to the left pointer and reset the value of the left pointer to l + 1

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let l = 0,
    r = 1

  while (r <= nums.length) {
    const idxDiff = Math.abs(l - r)
    const valDiff = Math.abs(nums[l] - nums[r])

    if (idxDiff <= indexDiff && valDiff <= valueDiff) {
      return true
    }
    if (r >= nums.length) {
      l++
      r = l + 1
    } else {
      r++
      if (idxDiff > indexDiff) {
        l++
        r = l + 1
      }
    }
  }
  return false
}
```
