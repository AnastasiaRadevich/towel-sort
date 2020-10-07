
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let result = [];
  matrix.forEach((item, index) => {
    if (index % 2 === 0) {
    item.forEach(num => {
      result.push(num);
    })} else {
      item = item.reverse();
      item.forEach(num => {
        result.push(num)
      })
    }
  })

  return result;
}
