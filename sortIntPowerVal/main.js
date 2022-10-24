var getKth = function(lo, hi, k) {
    let powerMap = new Map()
    
    for(let i=lo; i<=hi; i++){
        let temp = i
        let stepsCount = 0
        while(temp > 1){
            if(temp % 2 === 0){
                temp = temp/2
            }else{
                temp = (temp * 3) + 1
            }
            stepsCount ++
        }
        powerMap.set(i, stepsCount)
    }
    
    let mappedArr = Array.from(powerMap.entries()).sort((a,b) => a[1] - b[1])
   
    return mappedArr[k-1][0]
};