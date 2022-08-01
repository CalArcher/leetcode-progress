# Remove Element


[1]: https://leetcode.com/problems/remove-element/
## [LeetCode Problem][1]

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var removeElement = function(nums, val){
  let k = 0
  for(let i=0; i<nums.length; i++){
    if(nums[i] === val){
      nums[i] = '_'
      console.log(nums)
      k++
    }
  }
  return nums.sort().slice(0,k)
}

```

&nbsp;

### Tags:
#leetCode #javascript