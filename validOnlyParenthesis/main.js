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
