# 3Sum

[1]: https://leetcode.com/problems/3sum/
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

```

&nbsp;

## Note on my code:

this passes 315/318 test cases before timing out. It does work but right now is not very efficient. I will be revisiting this problem later, but as of now it does work.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function threeSum(nums){
  let output = []
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      let third = nums[j] + nums[i]
      let cancels = - (nums[j] + nums[i])
      let idx = nums.lastIndexOf(cancels)
      if(idx > j && third + cancels === 0){
          let newZero = [nums[i], nums[j], nums[idx]]
          output.push(newZero.sort())
      }
    }
  }
  let stringArray = output.map(JSON.stringify)
  let noDupes = Array.from(new Set(stringArray), JSON.parse)
  return noDupes
}

```

&nbsp;

### Tags:
#leetCode #javascript