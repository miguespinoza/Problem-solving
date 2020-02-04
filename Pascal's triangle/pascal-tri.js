/**
 * @param {number} numRows
 * @return {number[][]}
 *
 * time O(n^2)
 * space O(n^2)
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  matrix = [[1]];
  for (let row = 1; row <= numRows; row++) {
    matrix[row] = [1];
    for (let col = 1; col < row; col++) {
      matrix[row][col] = matrix[row - 1][col - 1] + matrix[row - 1][col];
    }
    matrix[row][row] = 1;
  }
  return matrix;
};

generate(5);
