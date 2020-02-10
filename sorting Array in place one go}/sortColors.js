/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // use two pointers
    // one stays with the current number, 
    // the other continues if it finds a future number that goes before "current" you swap them
    let rightZero = 0;
    let t= null;
    let leftTwo = nums.length-1;
    let i = 0;
    while(i < leftTwo){
        switch(nums[i]){
            case 0: 
                t = nums[rightZero];
                nums[rightZero] = nums[i];
                nums[i] = t;
                rightZero++;
                i++;
                break;
            case 2:
                t = nums[leftTwo];
                nums[leftTwo] = nums[i];
                nums[i] = t;
                leftTwo--;
                break;
            default: 
                i++;
        }
    }
    return nums;
    
};

console.log(sortColors([2,0,2,1,1,0,2]))

/**
 * The use of multiple pointers is key for this type of problems
 * Since evrithin is in place you can only do swaps
 * 
 * You need to keep track of relevant ppositions in the array with as many pointers you need
 * 
 * since you are swaping, you have to thing what happens with the new value you are bringing "down" in position
 */