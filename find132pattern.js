/**
 * @param {number[]} nums
 * @return {boolean}
//  */
// var find132pattern = function(nums) {
//     // low < mid < max
//     // nums[low] < nums[max] < nums[mid]
    
//     for(let low = 0; low < nums.length - 2; low++){
//         let lowest = nums[low];
//         for(let mid = low + 1; mid < nums.length -1; mid ++){
//             let medium = nums[mid];
//             if(medium > lowest){
//                 for(let max = mid+1; max < nums.length; max++){
//                     let maximum  = nums[max];
//                     if(maximum < medium && maximum > lowest){
//                         return true
//                     }
//                 }
//             }
//         }
//     }
//     return false
// };

var find132pattern = function(nums) {
    let stack = [];
    
    let jMin=[]
    
    for(let i = 0; i< nums.length; i++){
        if(jMin[i-1] == null || nums[i] < jMin[i-1]){
            jMin[i] = nums[i];
        } else {
            jMin[i] = jMin[i-1];
        }
    }
    
    for(let j= nums.length-1; j>=0; j--){
        if(jMin[j] < nums[j]){
            while (stack.length > 0 && stack[stack.length - 1] <= jMin[j]){
                 stack.pop();
            }
            
            if(stack[stack.length - 1] != null && stack[stack.length - 1] < nums[j]){
                return true
            }
            
            stack.push(nums[j])
            
        }
    }
    
    return false
};




console.log(find132pattern([1,0,1,-4,-3]));