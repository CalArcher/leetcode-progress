# Contains Duplicate II

[1]: https://leetcode.com/problems/contains-duplicate-ii/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: (nums = [1, 2, 3, 1]), (k = 3)
Output: true
```

&nbsp;

## Pseudo Code:

- First, create an empty object, numsContains
- For each element in the input array, we check to see if it exists in the numsContains object
- If it does exist and the value of that key, val, and the current index, i, and abs(val - i) <= k, then we can return true
- else if the element exists or not, we set the value of the array[i] key to equal i
- If the return true condition never is met, we return false after the loop

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var containsNearbyDuplicate = function (nums, k) {
  let numsContains = {}

  for (let i in nums) {
    if (numsContains[nums[i]] && Math.abs(numsContains[nums[i]] - i) <= k) {
      return true
    } else {
      numsContains[nums[i]] = i
    }
  }
  return false
}
```
