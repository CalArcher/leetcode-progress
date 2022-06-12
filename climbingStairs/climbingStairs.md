# Climbing Stairs


[1]: https://leetcode.com/problems/climbing-stairs/
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

```

&nbsp;

## Note:
- 1 <= n <= 45

&nbsp;

## Pseudo Code:
- as each time we can climb 1 or two steps ONLY, this means that you can reach the step you are on from the previous two steps.
- as a result, to solve this problem, you only need to get the sum of the answers from the previous steps (each time you add a new step). 


&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var climbStairs = function(n) {
  let foo = 1;
  let bar = 1;
  while (n > 1){
      let hold = foo;
      foo += bar;
      bar = hold;
      n -= 1;
  };
  return foo;
};

```

&nbsp;

### Tags:
#leetCode #javascript #stairs #counting