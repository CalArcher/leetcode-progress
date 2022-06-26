# Longest Substring Without Repeating Characters


[1]: https://leetcode.com/problems/longest-substring-without-repeating-characters/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given a string s, find the length of the longest substring without repeating characters.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

```


&nbsp;

## Pseudo Code:
- This is a great problem to use two pointers
- As you move the left pointer along the array, you push the element with index i into the new array
- if the array has that element, you instead shift the first element of the new array, and dont add 1 to i, and start the loop over at the same index
- While this is happening, you need to keep track of the longest length of the new array and return the max length at the end

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var lengthOfLongestSubstring = function(string){
    if(string.length === 1) return 1
    let s = string.split('')
    let right = 0
    let i = 1
    let currentStr = [s[0]]
    let longestStr = []
    while(i <= string.length){
        let check = currentStr.indexOf(s[i])
        if(s[i] === undefined){
            break
        }
        if(check >= 0){
            currentStr.shift()
            right ++
        }else{
            currentStr.push(s[i])
            i++
        }        
        if(currentStr.length > longestStr.length){
            longestStr = currentStr.slice(0)
        }
    }
    return longestStr.length
}

```

&nbsp;

### Tags:
#leetCode #javascript #twopointers