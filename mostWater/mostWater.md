# Container With Most Water


[1]: https://leetcode.com/problems/container-with-most-water/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

```

&nbsp;

## Note:
- Notice that you may not slant the container.

&nbsp;

## PseudoCode:
- To solve this we will use a two pointer method, with one at the start, and another at the end
- There are two ways to increase volume in this problem, by lengthening the tank, or by making it higher
- We start at the longest width and make that our maximum volume
- Now, whichever side of the array, left or right, is lower, we move that pointer towards the other by one
- If the volume of the new pointer and old pointer is higher than the saved max volume, we replace it
- We keep moving in by whichever pointer's value is lower until the pointers meet each other and return the max volume

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var maxArea = function(height){
    let maxWater = -1
    let left = 0
    let right = height.length - 1
    while(right > left){
        let water = height[right] > height[left] ? (right - left) * height[left] : (right - left) * height[right]
        if(water > maxWater){
            maxWater = water
        }
        if(height[left] >= height[right]){
            right--
        }else{
            left ++
        }
    }
    return maxWater
}

```

&nbsp;

### Tags:
#leetCode #javascript #twopointers