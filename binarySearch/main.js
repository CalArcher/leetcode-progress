var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let pointer = Math.floor((l + r) / 2)
    if (nums[pointer] === target) return pointer
    if (nums[pointer] > target) {
      r = pointer - 1
    } else if (nums[pointer] < target) {
      l = pointer + 1
    }
  }
  return -1
}
