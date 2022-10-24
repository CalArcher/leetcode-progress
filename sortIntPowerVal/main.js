var getKth = function (lo, hi, k) {
  let powerMap = new Map()

  for (let i = lo; i <= hi; i++) {
    let temp = i
    let stepsCount = 0
    while (temp > 1) {
      if (temp % 2 === 0) {
        temp = temp / 2
      } else {
        temp = temp * 3 + 1
      }
      stepsCount++
    }
    powerMap.set(i, stepsCount)
  }

  let mappedArr = Array.from(powerMap.entries()).sort((a, b) => a[1] - b[1])
  let output = mappedArr[k - 1][0]

  for (let i = k - 1; i < mappedArr.length - 1; i++) {
    const next = i + 1
    if (mappedArr[i][1] === mappedArr[next][1]) {
      output = mappedArr[next][0]
    } else {
      return output
    }
  }

  return output
}
