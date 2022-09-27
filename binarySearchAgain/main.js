var search = (nums, target) => {
  let high = nums.length - 1
  let low = 0
  let mid = Math.floor((nums.length - 1) / 2)
  console.log(mid)
  while (high >= low) {
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) {
      high = mid - 1
      mid = Math.floor((high - low) / 2)
    } else if (nums[mid] < target) {
      low = mid + 1
      mid = Math.floor((high - low) / 2) + low
    }
  }
  return -1
}
