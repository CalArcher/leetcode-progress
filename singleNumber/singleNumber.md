# Single Number


[1]: https://leetcode.com/problems/single-number/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.


&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [4,1,2,1,2]
Output: 4

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var singleNumber = function(nums){
    for(let i=0; i<nums.length; i++){
        const lastIdx = nums.lastIndexOf(nums[i])
        const firstIdx = nums.indexOf(nums[i])
        if(lastIdx === firstIdx){
            return nums[i]
        }
    }
}

```

&nbsp;

### Tags:
#leetCode #javascript