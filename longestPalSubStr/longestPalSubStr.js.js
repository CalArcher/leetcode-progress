var longestPalindrome = function (s) {
  s = s.split('')
  let l = 0
  let r = 0
  let longest = [s[0]]

  while (l < s.length) {
    if (s[l] === s[r]) {
      const check = s.slice(l, r + 1)
      const checkRev = check.slice().reverse().join('')
      if (check.join('') === checkRev) {
        if (check.length > longest.length) {
          longest = check
        }
      }
    }
    if (r >= s.length - 1) {
      l++
      r = l
    }
    r++
    if (longest.length > s.length - l) {
      return longest.join('')
    }
  }
  return longest.join('')
}
