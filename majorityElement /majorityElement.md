# Majority Element


[1]: https://leetcode.com/problems/majority-element/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: nums = [3,2,3]
Output: 3

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var majorityElement = function(nums){
    nums.sort((a,b) => a - b)
    let majority = nums[0]
    let max = 0
    let current = 0
    let currentNum = nums[0]
    for(let i=0; i<nums.length; i++){
        if(nums[i] != currentNum){
            currentNum = nums[i]
            current = 0
        }
        if(nums[i] === currentNum){
            current ++
        }
        if(current > max){
            majority = nums[i]
            max = current
        }
    }
    return majority
}

```

&nbsp;

## **Interesting Solution:**

<!-- code below -->

```javascript

var majorityElement = function(nums) {
    const n = nums.length;
    const numberMap = {}
    for(let i=0; i<=n; i++){
        if(!numberMap[nums[i]]){
            numberMap[nums[i]]= 1;
        }else{
            numberMap[nums[i]] = numberMap[nums[i]]+1;
        }
        
        if(numberMap[nums[i]]>n/2){
            return nums[i];
        }
    }

};

```

&nbsp;

### Tags:
#leetCode #javascript