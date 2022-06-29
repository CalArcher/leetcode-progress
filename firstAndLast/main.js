//Two solutions

var searchRange = function(nums, target) {
  let first = nums.indexOf(target)
  let last = nums.lastIndexOf(target)
  return [first, last]
}



var searchRange = function(nums, t){
  let r = nums.length - 1
  let l = 0
  let first = -1
  let last = -1
  while(r >= 0){
      if(nums[r] === t && last === -1){
          last = r
      }
      if(nums[l] === t && first === -1){
          first = l
      }
      if(first > -1 && last > -1) return [first,last]
      l++
      r--
  }
  return [first,last]
}