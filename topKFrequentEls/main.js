var topKFrequent = function (nums, k) {
  let elMap = {}
  let output = []

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    if (elMap[curr]) {
      elMap[curr]++
    } else {
      elMap[curr] = 1
    }
  }
  const sortedMap = Object.entries(elMap).sort((a, b) => b[1] - a[1])
  for (let el of sortedMap) {
    output.push(el[0])
  }
  return output.slice(0, k)
}
