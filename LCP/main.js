var longestCommonPrefix = function (strs) {
  if (strs.length <= 1) return strs[0]

  let longestPre = strs[0].split('')
  let longestPoss = strs[0].split('')

  for (let i = 1; i < strs.length; i++) {
    let pre = []
    let current = strs[i]

    for (let j in current) {
      if (current[j] === longestPoss[j]) {
        pre.push(current[j])
      } else {
        break
      }
    }
    if (pre.length < longestPre.length) {
      longestPre = pre.slice(0)
    }
  }
  if (longestPre.length < 1) return ''
  return longestPre.join('')
}
