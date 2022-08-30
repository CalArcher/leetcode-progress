var isIsomorphic = function (s, t) {
  s = s.split('')
  t = t.split('')
  return validIsoCheck(s, t)
}

var validIsoCheck = (s1, s2) => {
  let s1Map = {}
  let s2Map = {}

  for (let i = 0; i < s1.length; i++) {
    let key1 = s1[i]
    let key2 = s2[i]

    if (s1Map[key1] && s1Map[key1] !== key2) return false
    else if (!s1Map[key1] && s2Map[key2]) return false

    if (!s1Map[key1]) {
      s1Map[key1] = key2
    }
    if (!s2Map[key2]) {
      s2Map[key2] = key2
    }
  }
  return true
}
