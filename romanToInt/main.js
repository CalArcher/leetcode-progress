var romanToInt = function (s) {
  s = s.split('')
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = values[s[s.length - 1]]
  for (let i = 0; i < s.length - 1; i++) {
    if (values[s[i]] >= values[s[i + 1]]) {
      sum += values[s[i]]
    } else {
      sum -= values[s[i]]
    }
  }
  return sum
}
