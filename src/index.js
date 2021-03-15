
module.exports = function towelSort (matrix) {
  let matrixSort = [];
  if (matrix === undefined) return [];
  for (let i = 0; i < matrix.length; i++) {
      if(i % 2) {
        matrixSort = matrixSort.concat(matrix[i].reverse());
      } else {
        matrixSort = matrixSort.concat(matrix[i]);
      }
  }

module.exports = function towelSort (matrix) {
  return [];
}
  return matrixSort;
};