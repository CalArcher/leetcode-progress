var plusOne = function (digits) {
  let i = digits.length - 1
  while (true) {
    if (digits[i] === 9) {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
        return digits
      }
    } else {
      digits[i] += 1
      return digits
    }
    i--
  }
}
