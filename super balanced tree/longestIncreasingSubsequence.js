/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums == null || nums.length === 0){
        return 0;
    }
    let lssf = nums.map(() => 0);
    lssf[0] = 1;
    let res = 1;
    for(let i = 1; i< nums.length; i++){
        let maxSeqLen = 0
        for(let j = 0; j< i; j++){
            if(nums[i] > nums[j]){
                maxSeqLen = Math.max(maxSeqLen, lssf[j]);
            } 
            lssf[i] = maxSeqLen + 1;
            console.log(nums[i], nums[j], lssf, maxSeqLen,res);
            res = Math.max(res, lssf[i])   
        }
        
    }
    return res;
};

//[10,9,2,5,3,7,101,18]

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));