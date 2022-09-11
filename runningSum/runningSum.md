# TITLE

[1]: https://leetcode.com/problems/running-sum-of-1d-array/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var runningSum = function (nums) {
  let cumSum = 0
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i]
    nums[i] += cumSum
    cumSum += temp
  }
  return nums
}
```

&nbsp;

### Tags:

#LeetCode #javascript
