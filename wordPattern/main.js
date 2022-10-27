var wordPattern = function (pattern, s) {
  pattern = pattern.split('')
  s = s.split(' ')
  if (pattern.length !== s.length) return false
  let patternMap = new Map()
  let wordMap = new Map()

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.has(pattern[i]) || wordMap.has(s[i])) {
      if (wordMap.has(s[i]) && wordMap.get(s[i]) !== pattern[i]) {
        return false
      } else if (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== s[i]) {
        return false
      }
    } else {
      patternMap.set(pattern[i], s[i])
      wordMap.set(s[i], pattern[i])
    }
  }
  return true
}
