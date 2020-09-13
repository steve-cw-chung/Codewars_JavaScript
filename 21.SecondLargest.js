function getSecondLargest(nums) {
    // Complete the function
    var largest = 0;
    if(nums.length===0){
        return -1;
    }
    for(var i = 0 ; i < nums.length; i++){
        if(nums[i]>largest)
            largest = nums[i]
    }
    var secondLargest = 1;
    for( var i = 0 ; i < nums.length; i++){
        if(nums[i]<largest){
            if(nums[i]>= secondLargest){
                secondLargest = nums[i]
            }
        }
    }
    return secondLargest
}

console.log(getSecondLargest([1,2,3,4,5,6,7,8,9,10]))