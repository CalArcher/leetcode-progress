var shuffle = function (nums, n) {
  if (nums.length <= 1) return nums
  const firstHalf = nums.slice(0, n)
  const secondHalf = nums.slice(n, n.length)
  const output = []
  for (let i = 0; i < n; i++) {
    output.push(firstHalf[i])
    output.push(secondHalf[i])
  }
  return output
}
