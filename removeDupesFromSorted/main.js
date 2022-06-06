var removeDuplicates = function(nums) {
    let inc = 1
    for(let i = 1; i<nums.length; i++){
      if(nums[i] != nums[i - 1]){
        nums[inc] = nums[i]
        inc ++
      }
    }
    return inc
};
