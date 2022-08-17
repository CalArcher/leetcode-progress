# Concatenation of Array


[1]: https://leetcode.com/problems/concatenation-of-array/
## [LeetCode Problem][1]

&nbsp;

## Question
---

&nbsp;

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var getConcatenation = function(nums) {
    let concated = nums.concat(nums)
    return concated
}

```

&nbsp;

### Tags:
#leetCode #javascript