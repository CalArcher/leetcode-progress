var isStrictlyPalindromic = function(n) {
  const endCond = n - 2 >= 36 ? 34 : n - 2
  for(let i=2; i <= endCond; i++){
      const isPal = isPalindrome(n.toString(i))
      if(isPal === false){
          return false
      }
  }
  return true
}

function isPalindrome(str){
  const rev = [...str].reverse().join('')
  return rev === str ? true : false
} 