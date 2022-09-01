var longestPalindrome = function (s) {
  s = s.split('')
  let letters = buildMap(s)
  let longest = 0
  let odd = 0
  for (let key in letters) {
    let current = letters[key]
    if (current % 2 != 0) {
      if (current > odd) {
        longest += odd === 0 ? odd : odd - 1
        odd = current
      } else {
        longest += current - 1
      }
    } else {
      longest += current
    }
  }
  return (longest += odd)
}

var buildMap = (s) => {
  let letters = {}
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]]) {
      letters[s[i]]++
    } else {
      letters[s[i]] = 1
    }
  }
  return letters
}
