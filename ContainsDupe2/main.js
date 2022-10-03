var containsNearbyDuplicate = function (nums, k) {
  let numsContains = {}

  for (let i in nums) {
    if (numsContains[nums[i]] && Math.abs(numsContains[nums[i]] - i) <= k) {
      return true
    } else {
      numsContains[nums[i]] = i
    }
  }
  return false
}
