# String to Integer (atoi)


[1]: https://leetcode.com/problems/string-to-integer-atoi/
## [LeetCode Problem][1]

&nbsp;

## Question
---

&nbsp;

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

code here ------->

```

&nbsp;

## Note:
- Only the space character ' ' is considered a whitespace character.
- Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.


&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var myAtoi = function(s){
  s = s.split('')
  let result = []
  let nums = ['1','2','3','4','5','6','7','8','9','0','.']
  let startIdx = -1
  let hasNum = 0
  for(let i=0; i<s.length; i++){
    if(startIdx > -1 && s[i] === '-' || startIdx > -1 && s[i] === '+'){
      if(result.length === 1){
        return 0
      }
    }
    if(nums.includes(s[i]) === false && startIdx > -1) {
      break
    }
    if(startIdx === -1 && s[i] === '-' || s[i] === '+'){
      result.push(s[i])
      startIdx ++
    }else if(nums.includes(s[i])){
      hasNum++
      result.push(s[i])
      startIdx ++
    }
    if(startIdx === -1 && s[i] != ' '){
      return 0
    }
  }
  if(hasNum === 0){
    return 0
  }
  let big = (2**31) - 1
  let small = -(2**31)
  result = Number(result.join(''))
  if(result > big){
    return big
  }else if(result < small){
    return small 
  }
  return result
}

```

&nbsp;

### Tags:
#leetCode #javascript