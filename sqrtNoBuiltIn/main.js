var mySqrt = function (x) {
  let remainder = x
  let i = 1
  let count = 0

  while (remainder >= 0) {
    if (remainder === 0 || remainder < i) {
      return count
    }
    count += 1
    remainder -= i
    i += 2
  }
}
