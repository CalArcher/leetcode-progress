var lengthOfLongestSubstring = function(string){
  if(string.length === 1) return 1
  let s = string.split('')
  let right = 0
  let i = 1
  let currentStr = [s[0]]
  let longestStr = []
  while(i <= string.length){
      let check = currentStr.indexOf(s[i])
      if(s[i] === undefined){
          break
      }
      if(check >= 0){
          currentStr.shift()
          right ++
      }else{
          currentStr.push(s[i])
          i++
      }        
      if(currentStr.length > longestStr.length){
          longestStr = currentStr.slice(0)
      }
  }
  return longestStr.length
}