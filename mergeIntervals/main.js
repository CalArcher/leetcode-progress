var merge = function(ints){
  ints.sort((a,b) => a[0] - b[0])
  let i = 0
  while(i < ints.length - 1){
    let last = ints[i][1] > ints[i+1][1] ? ints[i][1] : ints[i+1][1]
    if(ints[i][1] >= ints[i+1][0]){
      ints[i] = [ints[i][0], last]
      ints.splice(i+1,1)
      i--
    }
    i++
  }
  return ints
}