# 7. Reverse Integer

[1]: https://leetcode.com/problems/reverse-integer/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: x = -123
Output: -321

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var reverse = function(x) {
  x=x.toString().split('')
  let output = []
  for(let i=0;i<x.length;i++){
    if(x[i] != '-'){
      output.unshift(x[i])
    }
  }
  if(x.includes('-')){
    output.unshift('-')
  }
  if(Number(output.join('')) > 2**31 -1){
    return 0
  }else if(Number(output.join('')) < -(2**31)){
    return 0
  }
  return Number(output.join(''))
}

```

&nbsp;

### Tags:
#leetCode #javascript