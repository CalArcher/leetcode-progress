var removeOccurrences = function (s, part) {
  while (true) {
    if (s.indexOf(part) != -1) {
      let start = s.indexOf(part)
      s = s.split('')
      s.splice(start, part.length)
      s = s.join('')
    } else {
      return s
    }
  }
  return s
}
