# Best Time To Buy And Sell Stock


[1]: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

```

&nbsp;

## Note:
- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104

&nbsp;

## Pseudo Code:
- as we loop through the array, we keep track of the maximum difference between the lowest found number and the next element.
- if the next array element is lower than the current element, we replace the low number.
- if the difference between the current low number and the current element is greater than the maximum difference, we replace the maximum difference.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var maxProfit = function(prices){
    let profit = 0
    let low = prices[0]
    for(let i=1; i<prices.length; i++){
        if(prices[i] < low){
            low = prices[i]
        }
        if(prices[i] - low > profit){
            profit = prices[i] - low
        }
    }
    return profit
}

```

&nbsp;

### Tags:
#leetCode #javascript