# Final Value of Variable After Performing Operations

[1]: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.

```

## **Solution:**

<!-- code below -->

```javascript
var finalValueAfterOperations = function (operations) {
  const valMap = {
    '--X': -1,
    'X--': -1,
    'X++': 1,
    '++X': 1
  }
  let output = 0
  for (let n of operations) {
    output += valMap[n]
  }
  return output
}
```
