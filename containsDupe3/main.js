var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let l = 0,
    r = 1

  while (r <= nums.length) {
    const idxDiff = Math.abs(l - r)
    const valDiff = Math.abs(nums[l] - nums[r])

    if (idxDiff <= indexDiff && valDiff <= valueDiff) {
      return true
    }
    if (r >= nums.length) {
      l++
      r = l + 1
    } else {
      r++
      if (idxDiff > indexDiff) {
        l++
        r = l + 1
      }
    }
  }
  return false
}
