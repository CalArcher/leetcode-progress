# Two Sum

[1]: https://leetcode.com/problems/two-sum/
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

```

&nbsp;

## Note:
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

&nbsp;

## Pseudo Code:
- This could be solved easily with two for loops, but the challenge was to do it in O(n) time.
- To solve this, you can just subtract the element you are on in your loop from the target, and see if the remainder exists in the rest of the array.
- If the remainder exists in the array, push the index of the remainder, and your current index to a new array, and the problem is solved.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var twoSum = function(nums, target){
  let output = []
  for(let i=0; i<nums.length; i++){
    let idx = nums.lastIndexOf(target - nums[i])
      if(idx != i && nums[i] + nums[idx] === target){
        output.push(i)
        output.push(idx)
        return output
      }
  }
}

```

&nbsp;

### Tags:
#leetCode #javascript