function findMaxNumber(arr) {
  let newArr = [...arr];
  return newArr.sort((a, b) => a - b).reverse()[0];
}

module.exports = findMaxNumber;
