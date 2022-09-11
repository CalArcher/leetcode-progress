var runningSum = function (nums) {
  let cumSum = 0
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i]
    nums[i] += cumSum
    cumSum += temp
  }
  return nums
}
