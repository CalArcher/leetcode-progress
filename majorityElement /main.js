var majorityElement = function(nums){
  nums.sort((a,b) => a - b)
  let majority = nums[0]
  let max = 0
  let current = 0
  let currentNum = nums[0]
  for(let i=0; i<nums.length; i++){
      if(nums[i] != currentNum){
          currentNum = nums[i]
          current = 0
      }
      if(nums[i] === currentNum){
          current ++
      }
      if(current > max){
          majority = nums[i]
          max = current
      }
  }
  return majority
}