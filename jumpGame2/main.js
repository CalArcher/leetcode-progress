var jump = function(nums) {
  if(nums.length === 1) return 0
  let count = 0
  let last = 0
  let biggest = 0
  for(let i=0; i<nums.length - 1; i++){
    let newJump = nums[i] + i
    biggest = biggest > newJump ? biggest : newJump
    if(i === last){
      count++
      last = biggest
    }
  }
  return count
}