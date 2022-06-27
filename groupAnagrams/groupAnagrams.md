# Group Anagrams


[1]: https://leetcode.com/problems/group-anagrams/
## [leetCode link][1]

&nbsp;

## Question
---

&nbsp;

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

```

&nbsp;

## Pseudo Code:
- First, we take each element in the array, turn it into an array, sort it from a-z, then turn it into a string, and call that "sorted"
- This is an easy problem to solve by making an object with keys named by each unique "sorted" element
- With each element of the input array, we check if its "sorted" value exists in the object
- If yes, we push the array element to the key value (array)
- If no, we make a new key and set its value to an array with the first element being the input element we are on

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

var groupAnagrams = function(strs){
  let obj = {}
  let names = []
  let grouped = []
  for(let i=0; i<strs.length; i++){
    let sorted = strs[i].split('').sort().join('')
    if(obj[sorted]){
      obj[sorted].push(strs[i])
    }else{
      obj[sorted] = [strs[i]]
      names.push(sorted)
    }
  }
  for(let i=0; i<names.length; i++){
    grouped.push(obj[names[i]])
  }
  return grouped
}

```

&nbsp;

### Tags:
#leetCode #javascript