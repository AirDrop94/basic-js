const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
   if (!Array.isArray(matrix) || matrix.length === 0) {
    return 0;
  }

  let counter = 0;

  for (const row of matrix) {
    for (const item of row) {
      if (item === '^^') {
        counter++;
      }
    }
  }

  return counter;
}

module.exports = {
  countCats
};
