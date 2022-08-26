var lengthOfLastWord = function (s) {
  s = s.toLowerCase().split(' ')
  for (let i = s.length - 1; i >= 0; i--) {
    let current = s[i]
    if (current.match(/[a-z]/i)) {
      return current.length
    }
  }
}
