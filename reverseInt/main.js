var reverse = function(x) {
  x=x.toString().split('')
  let output = []
  for(let i=0;i<x.length;i++){
    if(x[i] != '-'){
      output.unshift(x[i])
    }
  }
  if(x.includes('-')){
    output.unshift('-')
  }
  if(Number(output.join('')) > 2**31 -1){
    return 0
  }else if(Number(output.join('')) < -(2**31)){
    return 0
  }
  return Number(output.join(''))
}