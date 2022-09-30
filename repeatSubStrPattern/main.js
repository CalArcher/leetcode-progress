var repeatedSubstringPattern = function (s) {
  let doubleStr = s.concat(s)
  doubleStr = doubleStr.slice(0, doubleStr.length - 1)
  doubleStr = doubleStr.slice(1, doubleStr.length)
  return doubleStr.includes(s)
}
