var searchInsert = function(n,t){
  if(n.indexOf(t) >= 0){
      return n.indexOf(t)
  }else{
      n.push(t)
      n.sort((a,b) => a - b)
      return n.indexOf(t)
  }
}