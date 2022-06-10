# Search Insert Position

[1]: https://leetcode.com/problems/search-insert-position/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

### **You must write an algorithm with O(log n) runtime complexity.**

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [1,3,5,6], target = 5
Output: 2

```

&nbsp;

## Note:
- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums contains distinct values sorted in ascending order.
- -104 <= target <= 104

&nbsp;

## Pseudo Code:
- First, we check to see if the array contains the target (t).
- If the array does have the target, we return the index of that target.
- If the array **doesn't** have the target, we add the target to the array, either with unshift or push.
- Next, sort the array again in ascending order, and return the index of the target you just added.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var searchInsert = function(nums,t){
    if(nums.indexOf(t) >= 0){
        return nums.indexOf(t)
    }else{
        nums.push(t)
        nums.sort((a,b) => a - b)
        return nums.indexOf(t)
    }
}

```

&nbsp;

### Tags:
#leetCode #javascript