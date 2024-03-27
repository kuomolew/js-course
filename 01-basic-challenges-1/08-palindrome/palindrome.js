function isPalindrome(str) {
  const clearStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const revertStr = clearStr.split("").reverse().join("");

  return clearStr === revertStr;
}

module.exports = isPalindrome;
