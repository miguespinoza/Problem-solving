/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // classic divide and conquer
    // use searchArray with the matrix row in range
    let result = false;
    matrix.forEach((a,i) => {
        if(isInRange(matrix, i, target)){
            result = a.includes(target);
        }
    })
    return result;
};

function isInRange(matrix, rowIndex, target){
    if(rowIndex === matrix.length -1 && matrix[rowIndex][0] <= target){
        return true;
    }
    if(matrix[rowIndex][0] <= target && matrix[rowIndex + 1][0] > target){
        return true;
    }
    return false;
}

console.log(searchMatrix([
     [1,   3,  5,  7],
     [10, 11, 16, 20],
     [23, 30, 34, 50]
   ],3))


console.log(searchMatrix([
    [1],
],1))

//