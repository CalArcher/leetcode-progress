var containsDuplicate = function(nums) {
    const setNums = new Set(nums)
    return setNums.size != nums.length
}