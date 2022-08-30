var shortestPalindrome = function (s) {
  s = s.split('')

  if (isPalindrome(s)) return s.join('')

  if (s.length > 1) {
    let rev = s.slice().reverse()
    let shortest = rev.concat(s)
    let prefix = rev.slice()
    for (let i = 0; i < rev.length; i++) {
      let newAttempt = prefix.concat(s)
      let newRev = newAttempt.slice().reverse()
      if (newAttempt.join('') === newRev.join('')) {
        shortest = newAttempt
      }
      prefix.pop()
    }
    return shortest.join('')
  }
  return s.join('')
}

var isPalindrome = (s) => {
  let rev = s.slice().reverse().join('')
  if (s.join('') === rev) return true
  return false
}
