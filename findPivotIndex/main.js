var pivotIndex = function (nums) {
  //usually would use array method reduce, practicing making helper functions
  // let totalSum = nums.reduce((sum , el) => sum+el , 0)
  let totalSum = sumOfArray(nums)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i]
    if (rightSum === leftSum) {
      return i
    }
    leftSum += nums[i]
  }
  return -1
}

var sumOfArray = (arr) => {
  let total = arr[0]
  for (let i = 1; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
