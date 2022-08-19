# Jump Game II


[1]: https://leetcode.com/problems/jump-game-ii/
## [LeetCode Problem][1]

&nbsp;

## Question
---

&nbsp;

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.


&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

&nbsp;

## Pseudo Code:
- Iterate though array.
- At each step, check if the current index value + the current index (variable name "biggest") is greater than the last saved value. 
- Starting at value 0, make a variable "last". Anytime i === last, replace last with the current "biggest" value and add one to the number of jumps needed.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var jump = function(nums) {
  if(nums.length === 1) return 0
  let count = 0
  let last = 0
  let biggest = 0
  for(let i=0; i<nums.length - 1; i++){
    let newJump = nums[i] + i
    biggest = biggest > newJump ? biggest : newJump
    if(i === last){
      count++
      last = biggest
    }
  }
  return count
}

```

&nbsp;

### Tags:
#leetCode #javascript