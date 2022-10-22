# Valid Parenthesis

&nbsp;

## Question

---

&nbsp;

This was a recent question I was asked during a coding interview. This is a different solution than the one I provided that is cleaner and works better.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

"()()()(())" => valid
")()(" => invalid
"(((((()))(((()))))))" => invalid
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
const isValid = (s) => {
  s = s.split('')
  let openCount = 0

  for (let i = 0; i < s.length; i++) {
    const paren = s[i]
    if (paren === '(') {
      openCount++
    } else {
      openCount--
      if (s[i + 1] === '(' && openCount > 0) {
        return false
      }
    }
    if (openCount < 0) {
      return false
    }
  }
  return openCount === 0
}
```
