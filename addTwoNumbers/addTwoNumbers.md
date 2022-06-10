# Add Two Numbers


[1]: https://leetcode.com/problems/add-two-numbers/
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var addTwoNumbers = function(l1,l2){
  let carry = 0
  let prevNode = new ListNode()
  let headNode = prevNode
  while(l1 || l2 || carry){
    let value1 = 0
    let value2 = 0
    if(l1){
      value1 = l1.val
      l1 = l1.next
    }
    if(l2){
      value2 = l2.val
      l2 = l2.next
    }
    let sum = value1 + value2 + carry
    carry = sum > 9 ? 1 : 0
    let num = sum % 10
    let currNode = new ListNode(num)
    prevNode.next = currNode
    prevNode = currNode
  }
  return headNode.next
}

```

&nbsp;

### Tags:
#leetCode #javascript