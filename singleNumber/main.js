var singleNumber = function(nums){
  for(let i=0; i<nums.length; i++){
      const lastIdx = nums.lastIndexOf(nums[i])
      const firstIdx = nums.indexOf(nums[i])
      if(lastIdx === firstIdx){
          return nums[i]
      }
  }
}