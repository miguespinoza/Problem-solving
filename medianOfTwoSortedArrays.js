/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/
 * @param {*} arr 
 */

function median(arr){
    let med = Math.floor(arr.length /2);
    if(arr.length %2 === 0) {
        console.log(med)
        return (arr[med] + arr[med-1]) /2;
    }else{
        return arr[med];
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    if(nums1.length === 0 && nums2.length > 0){
        return median(nums2)
    } 
    if(nums2.length === 0 && nums1.length > 0){
        return median(nums1)
    } 
    if(nums2.length === 0 && nums2.length === 0){
        return 0;
    }
    
    // binary searrch to find a good partition
    // good partition elementsLeft === elementsRight
    // every element in the left partition is less or equal to every element on right partition
    
    // to find partition
        // partitionX + partitionY = (x+y+1) / 2
    
    
    // binary search on the shortest array well call this X
    let x = nums1.length <= nums2.length ? nums1 : nums2;
    let y = nums1.length <= nums2.length ? nums2 : nums1;
    let start = 0; 
    let end = x.length;
    while(start <= end){
        let pX = Math.floor((end + start) / 2)
        // because of formula
        let pY = Math.floor((x.length + y.length +1)/2 )- pX;
        console.log(pX, pY)
        
        
        let minRightX = pX === x.length ?  Infinity : x[pX];
        let maxLeftX = pX === 0 ? -Infinity : x[pX-1]
        
        
        let minRightY = pY === y.length ?  Infinity : y[pY];
        let maxLeftY =pY === 0 ? -Infinity : y[pY-1]
        
        console.log("x", minRightX, maxLeftX, "y", minRightY, maxLeftY)
        // if
        // maxLeftX <= minrightY
        // maxLeftY <= minRightX
        if(maxLeftX <= minRightY && maxLeftY <= minRightX ){
            // calculate median
            if((x.length + y.length) % 2 === 0){
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2
            } else{
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if(maxLeftX > minRightY){
            // else if
            // maxLeftX > minRightY
                // advance left in x
            end = pX-1;
        } else {
            start = pX+1; 
        }
                // advance right in X
    }
    
    
};



findMedianSortedArrays([1,3],
    [2]);