var maxArea = function(height){
  let maxWater = -1
  let left = 0
  let right = height.length - 1
  while(right > left){
      let water = height[right] > height[left] ? (right - left) * height[left] : (right - left) * height[right]
      if(water > maxWater){
          maxWater = water
      }
      if(height[left] >= height[right]){
          right--
      }else{
          left ++
      }
  }
  return maxWater
}