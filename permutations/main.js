function permute(n) {
    let permuted = []
    if (n.length === 0) return []
    if (n.length === 1) return [n]
    for (let i = 0; i < n.length; i++) {
      let current = n[i]
      let remaining = n.slice(0, i).concat(n.slice(i + 1))
      let remainingPermuted = permute(remaining)
      for (let j = 0; j < remainingPermuted.length; j++) {
         let permutedArray = [current].concat(remainingPermuted[j])
         permuted.push(permutedArray)
       }
     }
     return permuted
    }
   