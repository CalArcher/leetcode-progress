# Valid Parentheses


[1]: https://leetcode.com/problems/valid-parentheses/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

```

&nbsp;

## Note:
- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

&nbsp;

## PseudoCode:
- First, we need to build an object with opening parens as keys, and their closing brackets as the values
- Next, we loop through the array, and add every opening paren to a new array
- If the next loop, there isnt another opening paren, we check if the last added paren on the new array will close with the current loop value.
- If the next loop, there isnt another opening paren, we add that to the new array, then repeat the loop

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var isValid = function(s) {
    const sArray = s.split('')
    let build = []
    const matching = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for(let i=0; i<sArray.length; i++){
        if(matching[sArray[i]]) {
          build.push(sArray[i])
        } else {
            let near = build.pop()
            if(matching[near] != sArray[i]){
               return false
            }
        }
    }
    return build.length === 0
}

```

&nbsp;

### Tags:
#leetCode #javascript