var isValid = function(s) {
  const sArray = s.split('')
  let build = []
  const matching = {
      '(' : ')',
      '[' : ']',
      '{' : '}'
  }
  for(let i=0; i<sArray.length; i++){
      if(matching[sArray[i]]) {
        build.push(sArray[i])
      } else {
          let near = build.pop()
          if(matching[near] != sArray[i]){
             return false
          }
      }
  }
  return build.length === 0
}