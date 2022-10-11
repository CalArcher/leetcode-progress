var checkPossibility = function (nums) {
  let valid = 0
  if (nums[0] > nums[1]) {
    nums[0] = nums[1]
    valid++
  }
  let prev = nums[0]
  let next = nums[2]

  for (let i = 1; i < nums.length; i++) {
    prev = nums[i - 1]
    next = nums[i + 1]

    if (next < nums[i]) {
      if (next < prev) {
        nums[i + 1] = nums[i]
        valid++
      } else {
        nums[i] = next
        valid++
      }

      if (nums[i] < prev) {
        return false
      }
    }
    if (valid > 1) return false
  }
  return true
}
