var maximumWealth = function(accounts) {
  let wealthiest = -Infinity
  for(let i=0; i<accounts.length; i++){
      let temp = accounts[i].reduce((a,b) => a + b)
      if(temp > wealthiest){
          wealthiest = temp
  
      }
  }
  return wealthiest
}