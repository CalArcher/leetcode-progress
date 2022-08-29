var isPalindrome = function (s) {
  let palindromed = removeSpacesAndCommas(s)
  let reversed = palindromed.split('').reverse().join('')
  return palindromed === reversed
}

var removeSpacesAndCommas = (s) => {
  let arr = s.toLowerCase().split('')
  let temp = []
  for (let i = 0; i < s.length; i++) {
    let n = arr[i].charCodeAt(0)

    //wanted to solve without regex
    if ((n >= 48 && n <= 57) || (n >= 97 && n <= 122)) {
      temp.push(arr[i])
    }
  }
  return temp.join('')
}
