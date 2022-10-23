# Top K Frequent Elements

[1]: https://leetcode.com/problems/top-k-frequent-elements/submissions/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: (nums = [1, 1, 1, 2, 2, 3]), (k = 2)
Output: [1, 2]
```

&nbsp;

## Pseudo Code:

- First, we will make a map of each element that shows up in the array as the key, and the number of times it shows up as the value.
- Next, we create a new array from the key value pairs in the object and sort the array from highest value to lowest.
- We then push the first k elements to a new array and return that array.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var topKFrequent = function (nums, k) {
  let elMap = {}
  let output = []

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    if (elMap[curr]) {
      elMap[curr]++
    } else {
      elMap[curr] = 1
    }
  }
  const sortedMap = Object.entries(elMap).sort((a, b) => b[1] - a[1])
  for (let el of sortedMap) {
    output.push(el[0])
  }
  return output.slice(0, k)
}
```
