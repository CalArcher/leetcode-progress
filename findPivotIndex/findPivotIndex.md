# Find Pivot Index

[1]: https://leetcode.com/problems/find-pivot-index/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var pivotIndex = function (nums) {
  //usually would use array method reduce, practicing making helper functions
  // let totalSum = nums.reduce((sum , el) => sum+el , 0)
  let totalSum = sumOfArray(nums)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i]
    if (rightSum === leftSum) {
      return i
    }
    leftSum += nums[i]
  }
  return -1
}

var sumOfArray = (arr) => {
  let total = arr[0]
  for (let i = 1; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
```

&nbsp;

### Tags:

#LeetCode #javascript
