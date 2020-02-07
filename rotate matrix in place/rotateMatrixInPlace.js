function rotate(matrix) {
  let l = matrix.length;
  for (let r = 0; r < l; r++) {
    for (let c = r; c < l; c++) {
      temp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = temp;
    }
  }
  res = matrix.map(a => a.reverse());
  return res;
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
