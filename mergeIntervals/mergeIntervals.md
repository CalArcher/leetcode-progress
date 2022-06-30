# Merge Intervals


[1]: https://leetcode.com/problems/merge-intervals/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

```

&nbsp;

## Pseudo Code:
- First, to make solving the problem much easier, we sort the array in ascending order based off of the first index of each nested array
- Next, loop through the array, and check if the next array's first element is less than the current array's last element
- If it is, form a new array with index 0 equal to the current array's 0 index value, and the next array's 1 index value
- This new created array contains the whole range of the two arrays
- Finally, take the new created array, and set the current array equal to that value, and splice off the next array

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var merge = function(ints){
  ints.sort((a,b) => a[0] - b[0])
  let i = 0
  while(i < ints.length - 1){
    let last = ints[i][1] > ints[i+1][1] ? ints[i][1] : ints[i+1][1]
    if(ints[i][1] >= ints[i+1][0]){
      ints[i] = [ints[i][0], last]
      ints.splice(i+1,1)
      i--
    }
    i++
  }
  return ints
}

```

&nbsp;

### Tags:
#leetCode #javascript