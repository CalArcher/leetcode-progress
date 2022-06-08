var twoSum = function(nums, target){
    let output = []
    for(let i=0; i<nums.length; i++){
      let idx = nums.lastIndexOf(target - nums[i])
        if(idx != i && nums[i] + nums[idx] === target){
          output.push(i)
          output.push(idx)
          return output
        }
    }
  }