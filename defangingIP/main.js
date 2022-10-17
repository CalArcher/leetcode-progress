var defangIPaddr = function (address) {
  let output = address.replaceAll('.', '[.]')
  return output
}
