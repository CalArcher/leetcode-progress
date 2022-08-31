var rotate = function (nums, k) {
  if (nums.length === 1) return nums
  k = nums.length <= k ? k % nums.length : k
  let pop = nums.splice(nums.length - k)
  nums.unshift(...pop)
  return nums
}
