# Min Cost Climbing Stairs


[1]: https://leetcode.com/problems/min-cost-climbing-stairs/
## [LeetCode Problem][1]

&nbsp;

## Question
---

&nbsp;

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var minCostClimbingStairs = function (cost) {
	let one = cost[0]
	let two = cost[1]
	for (let i=2; i<=cost.length; i++) {
		const temp = two
		two = Math.min(one, two) + (cost[i] || 0)
		one = temp
	}
	return two
}

```

&nbsp;

### Tags:
#leetCode #javascript