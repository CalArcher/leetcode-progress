# Find First and Last Position of Element in Sorted Array


[1]: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

//Two solutions

//Array methods solution
var searchRange = function(nums, target) {
  let first = nums.indexOf(target)
  let last = nums.lastIndexOf(target)
  return [first, last]
}

// Two pointers solution
var searchRange = function(nums, t){
  let r = nums.length - 1
  let l = 0
  let first = -1
  let last = -1
  while(r >= 0){
      if(nums[r] === t && last === -1){
          last = r
      }
      if(nums[l] === t && first === -1){
          first = l
      }
      if(first > -1 && last > -1) return [first,last]
      l++
      r--
  }
  return [first,last]
}

```

&nbsp;

### Tags:
#leetCode #javascript