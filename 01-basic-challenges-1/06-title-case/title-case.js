function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
}

module.exports = titleCase;
