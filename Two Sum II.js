/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

    Your returned answers (both index1 and index2) are not zero-based.
    You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.


 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // nums must be smaller than 9


    // first number must be >= target / 2
    //[1,2,3,4,6,7,10,25]  // 15


    // using binary search find the position of target in the array. O(log n)
    let position = binaryInsertion(numbers, target, 0, numbers.length - 1) + 1;
    for (let i = position - 1; i >= 0; i--) {
        let n = numbers[i];
        // start iterating from position to the left. / O(n * log(n))
        // pair = target -n
        // use binary search to look for pair. window starts from i to 0 O(log n)
        let pair = target - n;
        let pairIndex = binarySearch(numbers, pair, 0, i)
        if (pairIndex > -1)
            return [i+1, pairIndex+1]
    }

    // complexity O(n log(n))



};

function binaryInsertion(arr, target, start, end) {
    while (start <= end) {
        let pivot = Math.floor((end - start) / 2) + start;
        let n = arr[pivot];
        if (n === target || (arr[pivot] < target && arr[pivot + 1] > target)) {
            return pivot;
        }
        if (target > n) {
            start = pivot + 1;
        } else {
            end = pivot - 1;
        }
    }
    return arr.length-1;
}

function binarySearch(arr, target, start, end) {
    while (start <= end) {
        let pivot = Math.floor((end - start) / 2) + start;
        let n = arr[pivot];
        if (n === target) {
            return pivot;
        }
        if (target > n) {
            start = pivot + 1;
        } else {
            end = pivot - 1;
        }
    }
    return -1;
}


console.log(twoSum([-1,0], -1))