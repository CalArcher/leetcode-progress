var minCostClimbingStairs = function (cost) {
	let one = cost[0]
	let two = cost[1]
	for (let i=2; i<=cost.length; i++) {
		const temp = two
		two = Math.min(one, two) + (cost[i] || 0)
		one = temp
	}
	return two
}