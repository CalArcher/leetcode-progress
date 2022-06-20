# Maximum Subarray


[1]: https://leetcode.com/problems/maximum-subarray/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

```

&nbsp;

## Note:
- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104


&nbsp;

## Pseudo Code:
- we need to variables to store the new maximum found value, and one for the current value.
- the max variable initially needs to be set to the first element of the array, as we do not know how small the elements could be.
- as we loop through, add the new element to the current value. If at that time the value is greater than the max value, max = current.
- if the array is full of negative numbers, this works as the highest negative number will just replace the max value.
- If the current value dips under 0, we start the count over at the next element. 

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var maxSubArray = function(nums) {
  let max = nums[0]
  let current = 0
  for(let i=0; i<nums.length; i++){
      current += nums[i]
      if(current > max){
          max = current
      }
      if(current < 0){
          current = 0
      }
  }
  return max
}

```

&nbsp;

### Tags:
#leetCode #javascript