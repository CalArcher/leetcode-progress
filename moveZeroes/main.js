var moveZeroes = function(nums){
  let minus = 0
  for(let i=0; i<nums.length; i++){
    if(nums[i - minus] === 0){
      nums.splice(i - minus,1)
      nums.push(0)
      minus ++
    }
  } 
  return nums
}