var maxAscendingSum = function (nums) {
  let max = 0
  let current = 0
  let last = nums[0]
  for (let i in nums) {
    if (nums[i] <= last) {
      current = 0
    }
    current += nums[i]
    if (current > max) {
      max = current
    }
    last = nums[i]
  }
  return max
}
