/**
 * @param {number} rowIndex
 * @return {number[]}
 *
 * time O(n^2)
 * spaceO(n)
 */
var getTriangleRow = function(rowIndex) {
  if (rowIndex == 0) return [1];
  let triangle = [1, 1];
  for (let row = 2; row < rowIndex + 1; row++) {
    let temp = [1];
    for (let col = 1; col < row; col++) {
      temp[col] = triangle[col - 1] + triangle[col];
    }
    temp[row] = 1;
    triangle = temp;
  }
  return triangle;
};

getTriangleRow(3);
