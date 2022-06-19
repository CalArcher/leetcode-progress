var isPalindrome = function(x){
  x = x.toString()
  let reversed = x.split('').reverse().join('')
  return x === reversed 
}