var generate = function(n) {
    let output = [[1]]
    let count = 1
    let current = [1]
    while(count < n){
        let next = [1]
        for(let i=1; i<current.length; i++){
            const newEl = current[i] + current[i-1]
            next.push(newEl)
        }
        next.push(1)
        current = next
        output.push(current)
        count ++
    }
    return output
};