# Move Zeroes


[1]: https://leetcode.com/problems/move-zeroes/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

```

&nbsp;

## Note:
- Note that you must do this in-place without making a copy of the array.


&nbsp;



## **Solution:**

<!-- code below -->

```javascript

var moveZeroes = function(nums){
  let minus = 0
  for(let i=0; i<nums.length; i++){
    if(nums[i - minus] === 0){
      nums.splice(i - minus,1)
      nums.push(0)
      minus ++
    }
  } 
  return nums
}

```

&nbsp;

### Tags:
#leetCode #javascript