# Happy Number

[1]: https://leetcode.com/problems/happy-number/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var isHappy = function(n) {
    let results = new Map()
    let lastNum = n
    
    while(true){
        const newNum = returnSquared(lastNum)
        if(newNum === 1){
            return true
        }else if(results.has(newNum)){
            return false
        }else{
            results.set(newNum, '')
        }
        lastNum = newNum
    }
};


const returnSquared = (n) => {
    let numArr = n.toString().split('')
    let output = 0
    for(let i=0; i<numArr.length; i++){
        output += numArr[i] * numArr[i]
    }
    return output    
}

// while loop while true
// helper function to take number's digits, square them, add, then returns that result
// map which will contain each result from the helper funciton
// check if new result is in the map, if true, return false, else continue loop

```
