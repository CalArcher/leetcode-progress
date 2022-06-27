var groupAnagrams = function(strs){
  let obj = {}
  let names = []
  let grouped = []
  for(let i=0; i<strs.length; i++){
    let sorted = strs[i].split('').sort().join('')
    if(obj[sorted]){
      obj[sorted].push(strs[i])
    }else{
      obj[sorted] = [strs[i]]
      names.push(sorted)
    }
  }
  for(let i=0; i<names.length; i++){
    grouped.push(obj[names[i]])
  }
  return grouped
}