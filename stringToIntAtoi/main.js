var myAtoi = function(s){
  s = s.split('')
  let result = []
  let nums = ['1','2','3','4','5','6','7','8','9','0','.']
  let startIdx = -1
  let hasNum = 0
  for(let i=0; i<s.length; i++){
    if(startIdx > -1 && s[i] === '-' || startIdx > -1 && s[i] === '+'){
      if(result.length === 1){
        return 0
      }
    }
    if(nums.includes(s[i]) === false && startIdx > -1) {
      break
    }
    if(startIdx === -1 && s[i] === '-' || s[i] === '+'){
      result.push(s[i])
      startIdx ++
    }else if(nums.includes(s[i])){
      hasNum++
      result.push(s[i])
      startIdx ++
    }
    if(startIdx === -1 && s[i] != ' '){
      return 0
    }
  }
  if(hasNum === 0){
    return 0
  }
  let big = (2**31) - 1
  let small = -(2**31)
  result = Number(result.join(''))
  if(result > big){
    return big
  }else if(result < small){
    return small 
  }
  return result
}