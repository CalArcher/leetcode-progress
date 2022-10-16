var finalValueAfterOperations = function (operations) {
  const valMap = {
    '--X': -1,
    'X--': -1,
    'X++': 1,
    '++X': 1
  }
  let output = 0
  for (let n of operations) {
    output += valMap[n]
  }
  return output
}
