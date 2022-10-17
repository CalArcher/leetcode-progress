# Defanging an IP Address

[1]: https://leetcode.com/problems/defanging-an-ip-address/

## [LeetCode Problem][1]

&nbsp;

## Question

---

&nbsp;

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

&nbsp;

### **Example:**

<!-- code below -->

```javascript
Input: address = '1.1.1.1'
Output: '1[.]1[.]1[.]1'
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
var defangIPaddr = function (address) {
  let output = address.replaceAll('.', '[.]')
  return output
}
```
