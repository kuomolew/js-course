function countOccurrences(str, char) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) counter++;
  }

  return counter;
}

module.exports = countOccurrences;
