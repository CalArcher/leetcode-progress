function threeSum(nums){
    let output = []
    for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
        let third = nums[j] + nums[i]
        let cancels = - (nums[j] + nums[i])
        let idx = nums.lastIndexOf(cancels)
        if(idx > j && third + cancels === 0){
            let newZero = [nums[i], nums[j], nums[idx]]
            output.push(newZero.sort())
        }
      }
    }
    let stringArray = output.map(JSON.stringify)
    let noDupes = Array.from(new Set(stringArray), JSON.parse)
    return noDupes
  }