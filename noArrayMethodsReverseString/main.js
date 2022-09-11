//practice without array methods using two pointers

var reverseString = function (s) {
  if (s.length === 1 || s.length === 0) return s

  let r = s.length - 1
  let l = 0

  while (r > l) {
    let tempRight = s[r]
    let tempLeft = s[l]
    s[r] = tempLeft
    s[l] = tempRight
    r--
    l++
  }
  return s
}
