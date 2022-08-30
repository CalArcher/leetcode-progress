var isSubsequence = function (s, t) {
  let build = []
  let j = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      build.push(t[i])
      j++
      if (build.join('') === s) {
        return true
      }
    }
  }
  if (build.join('') === s) {
    return true
  }
  return false
}
